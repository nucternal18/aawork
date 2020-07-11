require('dotenv').config();
const jwt = require('jsonwebtoken');
const  pool  = require('../config/db');

const authMiddleware = async function (req, res, next) {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("the decoded token" + decoded)
    const result = await pool.query(
      'SELECT b.userid,b.first_name,b.last_name,b.email,t.access_token from users b inner join tokens t on b.userid=t.userid where t.access_token=$1 and t.userid=$2',
      [token, decoded.userid]
    );
    console.log(result)
    const user = result.rows[0];
    console.log(user)
    if (user) {
      req.user = user;
      req.token = token;
      next();
    } else {
      throw new Error('Error while authentication');
    }
  } catch (error) {
    res.status(400).send({
      auth_error: 'Authentication failed.'
    });
  }
};

module.exports = authMiddleware;

