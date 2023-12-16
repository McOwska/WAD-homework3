const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres", 
    database: "testWad", 
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); 
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "date" DATE NOT NULL,
	    "body" VARCHAR(200) NOT NULL    
        );`;
  
execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posttable" table');
    }
});

const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS "usertable" (
        "id" SERIAL PRIMARY KEY,
        "username" VARCHAR(50) NOT NULL UNIQUE,
        "password" VARCHAR(255) NOT NULL
    );`;

execute(createUserTableQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "usertable" table');
    }
});

module.exports = pool;