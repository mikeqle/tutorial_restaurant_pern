require("dotenv").config();

const express = require('express');

// Default port = 8001 if no environment var PORT found
const port = process.env.PORT || 8001;

const app = express();

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});