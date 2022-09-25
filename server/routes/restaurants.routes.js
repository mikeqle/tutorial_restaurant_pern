const RestaurantController = require("../controllers/restaurants.controller");

module.exports = (app) => {
    app.get('/api/v1/restaurants', RestaurantController.getAllRestaurants);

    app.get('/api/v1/restaurants/:id', RestaurantController.getOneRestaurant);

    app.post('/api/v1/restaurants', RestaurantController.createRestaurant);

    app.put('/api/v1/restaurants/:id', RestaurantController.updateRestaurant);

    app.delete('/api/v1/restaurants/:id', RestaurantController.deleteRestaurant);

};