const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3010;

const app = express();

app.use(cors());
app.use(express.json());


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

app.listen(port, () => console.log(`Server running on port ${port}`));
