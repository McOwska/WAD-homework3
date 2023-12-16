const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3010;

const app = express();

// in shared project: localhost:8081
app.use(cors({origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(cookieParser());

const secret = "gdgdhdbcb770785rgdzqws";
const maxAge = 60 * 60; // 1 hour


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/api/posts/', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(date, body) values ($1, $2)    RETURNING*", [post.date, post.body]
// $1, $2, $3 are mapped to the first, second and third element of the passed array (post.title, post.body, post.urllink) 
// The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
// using "*" after the RETURNING keyword in PostgreSQL, will return everything
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        // The req.params property is an object containing properties mapped to the named route "parameters". 
        // For example, if you have the route /posts/:id, then the "id" property is available as req.params.id.
        const { id } = req.params; // assigning all route "parameters" to the id "object"
        const posts = await pool.query( // pool.query runs a single query on the database.
            //$1 is mapped to the first element of { id } (which is just the value of id). 
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]); 
// we already know that the row array contains a single element, and here we are trying to access it
        // The res.json() function sends a JSON response. 
        // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET (date, body) = ($2, $3) WHERE id = $1", [id, post.date, post.body]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        //const post = req.body; // we do not need a body for a delete request
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
}); 

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, {
        expiresIn: maxAge
    });
};

app.get('/auth/authenticate', async (req, res) => {
    console.log("authenticate request has arrived");
    const token = req.cookies.jwt;

    if (!token) {
        console.log("no token found");
        return res.send({ "authenticated": false });
    }

    try {
        const decoded = await jwt.verify(token, secret);
        console.log('User is authenticated');
        res.send({ "authenticated": true });
    } catch (err) {
        console.log("Error in JWT verify:", err.message);
        res.status(400).send({ "authenticated": false, "error": err.message });
    }
});

app.post('/api/register', async (req, res) => {
    try {
        console.log("a signup request has arrived");
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO usertable(username, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        if (err.code === '23505') { // check Postgres error code to see it is a duplicate key error (user already exists)
            res.status(409).send('User already exists.'); 
        } else {
            console.error(err.message);
            res.status(400).send(err.message);
        }
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM usertable WHERE username = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //console.log("validPassword:" + validPassword);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        return res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
        
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
});

//logout a user = deletes the jwt
app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});


app.listen(port, () => console.log(`Server running on port ${port}`));
