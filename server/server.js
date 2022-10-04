require("dotenv").config();
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Include Morgan middleware for logging request
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());


// // Handling issues with GET request for getOneRestaurant
// app.use(express.static(path.join(__dirname, 'build')));

// // PATH CONFIGURATION TO RESPOND TO A REQUEST TO STATIC ROUTE REQUEST BY SERVING index.html
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



// Routes
require('./routes/restaurants.routes')(app);


// Default port = 8001 if no environment var PORT found
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});