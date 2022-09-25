module.exports ={
    getAllRestaurants: (req, res) => {
        console.log("Getting All Restaurants");
        res.status(200).json({
            status: "success",
            data: {
                restaurant: ['mcdonalds', 'wendys']
            }
        });
    },

    getOneRestaurant: (req, res) => {
        console.log("Getting One Restaurants");
        res.status(200).json({
            status: "success",
            data: {
                restaurant: "McDonald's"
            }
        });
    },

    createRestaurant: (req, res) => {
        console.log("Creating Restaurant");
        res.status(201).json({
            status: "success",
            data: {
                restaurant: "McDonald's"
            }
        });
    },

    updateRestaurant: (req, res) => {
        console.log("Updating Restaurant");
        res.status(200).json({
            status: "success",
            data: {
                restaurant: "McDonald's"
            }
        });
    },

    deleteRestaurant: (req, res) => {
        console.log("Deleting Restaurant");
        res.status(204).json({
            status: "success"
        })
    },
}