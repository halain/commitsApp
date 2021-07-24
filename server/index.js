const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./db/config');

//Server express
const app = express();

//DB connection
dbConnection();

//Public for deploy angular app
app.use( express.static('public'))

//cors
app.use( cors() );

//Request Body parse
app.use( express.json() );

//Routes
app.use('/api/auth', require('./routes/auth') );

//start server
app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
});

