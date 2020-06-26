const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const cors = require("cors");
const cookieParser = require("cookie-parser")
// Load config
dotenv.config({ path: './config/config.env'});

const router = require('./routes/auth');

const app = express();
// Cookie parser
app.use(cookieParser());

const port = 5000; // We run our backend on this port.

app.use(cors()); // allow cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// These are the paths used to perform various actions.
app.use('/api', require('./routes/auth'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
