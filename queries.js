require('dotenv').config()
const pg = require("pg");

const config = {
  user: 'postgres',
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: 'password1',
  port: process.env.POSTGRES_PORT
};
// process.env refers to environment variable values. Docker-Compose sets the environment variables we've created in the .envs folder.

const pool = new pg.Pool(config);

const getUsers = async (request, response) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    response.json(users.rows)
  } catch (error) {
    console.log(error.message);
  }
};

const setUser = (request, response) => {
  try {
    
  } catch (error) {
    
  }
  const { username, info } = request.body;
  pool.query(
    `INSERT INTO users (username, info) VALUES ('${username}', '${info}')`,
    error => {
      if (error) {
        if (error.code === "23505") {
          response.status(409).json({ error: "Username already exists." });
        } else {
          console.log(error);
          response.status(500).json("Internal server error");
        }
      } else {
        response.status(201).json();
      }
    }
  );
};

const updateUser = (request, response) => {
  const { username, info } = request.body;
  pool.query(
    `UPDATE users SET info = '${info}' WHERE username = '${username}'`,
    error => {
      if (error) {
        console.log(error);
        response.status(500).json("Internal server error");
      } else {
        response.status(201).json();
      }
    }
  );
};

const deleteUser = (request, response) => {
  const { username } = request.body;
  pool.query(`DELETE FROM users WHERE username = '${username}'`, error => {
    if (error) {
      if (error.code === "23505") {
        response.status(409).json({ error: "Username doesn't exist." });
      } else {
        console.log(error);
        response.status(500).json("Internal server error");
      }
    } else {
      response.status(201).json();
    }
  });
};

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser
};