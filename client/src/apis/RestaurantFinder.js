import axios from 'axios';

// NODE_ENV

const baseURL = 
    process.env.NODE_ENV === 'production' 
        ? "api/v1/restaurants" 
        : "http://localhost:8000/api/v1/restaurants";
 

export default axios.create({
    baseURL,
});