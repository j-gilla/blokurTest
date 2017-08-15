const express  = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
// const routes = require('routes');

const port = process.env.PORT || 3000;

const app = express();


// Start her up, boys
app.listen(port);
console.log("All watched over by port " + port + " of loving grace.");
