const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Server express
const app = express();

//DB connection


//Public for deploy angular app
app.use( express.static('public'))

//cors
app.use( cors() );

//Request Body parse
app.use( express.json() );

//Routes


//start server
app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
});

