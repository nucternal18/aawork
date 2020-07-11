require('dotenv').config()
const {Pool} = require("pg");


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aaworks',
  password: 'password1',
  port: '5432'
});

module.exports = {pool};