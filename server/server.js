require("dotenv").config();
const express = require('express');

const app = express();

// Routes
// app.get("/getRestaurants", (req, res) => {
//     console.log("Retrieving all restaurants");
//     res.json({
//         status: "success",
//         restaurant: ["McDonalds", "Wendys"]
//     })
// })

require('./routes/restaurants.routes')(app);


// Default port = 8001 if no environment var PORT found
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});