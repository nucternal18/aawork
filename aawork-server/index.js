const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv')
const cors = require("cors");
const morgan = require('morgan');
const authRoute = require('./routes/auth');


// Load config
dotenv.config({ path: './config/config.env'});


const app = express();


const PORT = process.env.PORT || 5000; // We run our backend on this port.



//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Cookie parser
app.use(cookieParser());
// app.use(authRoute);

// These are the paths used to perform various actions.
app.use('/api', require('./routes/auth'));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.listen(PORT, console.log(`Server listening on port ${PORT}!`));
