const db = require('../db');

module.exports ={
    getAllRestaurants: async (req, res) => {
        console.log("Getting All Restaurants");
        try {
            const results = await db.query("SELECT * FROM restaurants ORDER BY id;");
            // console.log(results);
            res.status(200).json({
                status: "success",
                results: results.rows.length,
                data: {
                    restaurants: results.rows
                }
            });    
        } catch (err) {
            console.log(err);
        };
    },

    getOneRestaurant: async (req, res) => {
        console.log("Getting One Restaurants");
        try {
            const restaurant = await db.query(
                "SELECT * FROM restaurants WHERE id = $1;",
                [req.params.id]
            );

            const reviews = await db.query(
                "SELECT * FROM reviews WHERE restaurant_id = $1;",
                [req.params.id]
            );

            res.status(200).json({
                status: "success",
                data: {
                    restaurant: restaurant.rows[0],
                    reviews: reviews.rows
                }
            })
        } catch (err) {
            console.log(err);
        };
    },

    createRestaurant: async (req, res) => {
        console.log("Creating Restaurant");
        try {
            const results = await db.query(
                "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;",
                [req.body.name, req.body.location, req.body.price_range]
            );
            console.log("Restaurant successfully created.");
            res.status(201).json({
                status: "success",
                data: {
                    restaurant: results.rows[0],
                }
            });
        } catch (err) {
            console.log(err);
        };
    },

    updateRestaurant: async (req, res) => {
        console.log("Updating Restaurant");
        try {
            const results = await db.query(
                "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
                [req.body.name, req.body.location, req.body.price_range, req.params.id]
            );
            res.status(200).json({
                status: "success",
                data: {
                    restaurant: results.rows[0]
                }
            });
        } catch (err) {
            console.log(err);
        };
    },

    deleteRestaurant: async (req, res) => {
        console.log("Deleting Restaurant");
        try {
            const results = await db.query(
                "DELETE FROM restaurants WHERE id = $1 RETURNING *",
                [req.params.id]
            );
            
            res.status(200).json({
                status: "success",
                restaurant: results.rows[0]
            });    
        } catch (err) {
            console.log(err);
        };
    },

    addReview: async (req, res) => {
        console.log("Adding Review");
        try {
            const newReview = await db.query(
                "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;",
                [req.params.id, req.body.name, req.body.review, req.body.rating]
            );
            res.status(201).json({
                status: "success",
                data: {
                    review: newReview.rows[0]
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
}