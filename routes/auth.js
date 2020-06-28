const express = require('express');
const bcrypt = require('bcryptjs');
const { pool } = require('../db/connect');
const {validateUser, isInvalidField, generateAuthToken} = require('../Utils/common');
const  authMiddleware = require('../middleware/auth');

const Router = express.Router();

Router.post('/signup', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const validFieldsToUpdate = [
            'first_name',
            'last_name',
            'email',
            'password'
          ];
          const receivedFields = Object.keys(req.body);
      
          const isInvalidFieldProvided = isInvalidField(
            receivedFields,
            validFieldsToUpdate
          );
      
          if (isInvalidFieldProvided) {
            return res.status(400).send({
              signup_error: 'Invalid field.'
            });
          }

          const result = await pool.query(
            'select count(*) as count from users where email=$1',
            [email]
          );
          const count = result.rows[0].count;
          if (count > 0) {
            return res.status(400).send({
              signup_error: 'User with this email address already exists.'
            });
          }

          const hashPassword = await bcrypt.hash(password, 8);
          await pool.query( 'insert into users(first_name, last_name, email, password)  values($1, $2, $3, $4)', [first_name, last_name, email, hashPassword]);
          res.status(201).send('Signed Up')
    } catch (error) {
        res.status(400).send({
            signup_error: 'Error while signing up..Try again later.'
          });
    }
});

Router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await validateUser(email, password);
        if(!user){
            res.status(400).send({
                signin_error: 'Email/password does not match1234.'
            });
        };

        const token = await generateAuthToken(user);
        const result = await pool.query(
            'INSERT INTO TOKENS(access_token, userid) VALUES($1,$2) RETURNING *',
            [token, user.userid]   
        );

        if (!result.rows[0]) {
            return res.status(400).send({
                signin_error: 'Error while signing in...Try again later'
            })
        };
        res.cookie('token', token, {
          httpOnly: true
        })
        user.token = result.rows[0].access_token;
        res.send(user);
    } catch (error) {
        res.status(400).send({
            signin_error: 'Email/password does not match.'
        })
    }
});

Router.post('/logout', authMiddleware, async (req, res) => {
  try {
    const {userid, access_token} = req.user;
    await pool.query('delete from userid=$1 and access_token=$2', [ userid, access_token]);

    res.send();
  } catch (error) {
    res.status(400).send({
      logout_error: 'Error while logging out...Try again later.'
    })
  }
})

module.exports = Router;
