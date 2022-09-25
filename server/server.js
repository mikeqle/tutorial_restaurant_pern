require("dotenv").config();
const express = require('express');
const morgan = require("morgan");

const app = express();

// Include Morgan middleware for logging request
app.use(morgan("dev"));

app.use(express.json());

// Routes
require('./routes/restaurants.routes')(app);


// Default port = 8001 if no environment var PORT found
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});