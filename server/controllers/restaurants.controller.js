module.exports ={
    getAllRestaurants: (req, res) => {
        console.log("Getting All Restaurants");
        res.status(400).json({
            status: "success",
            data: {
                restaurant: ['mcdonalds', 'wendys']
            }
        })
    },

    getOneRestaurant: (req, res) => {
        console.log("Getting One Restaurants");
    },

    createRestaurant: (req, res) => {
        console.log("Creating Restaurant");
    },

    updateRestaurant: (req, res) => {
        console.log("Updating Restaurant");
    },

    deleteRestaurant: (req, res) => {
        console.log("Deleting Restaurant");
    },
}