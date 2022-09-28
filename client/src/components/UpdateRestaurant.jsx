import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await RestaurantFinder.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name: name,
            location: location,
            price_range: priceRange
        });
        navigate(`/`);
    }

    return (
        <div>
            <form action="">
                <div className="form-group" action="">
                    <label htmlFor="name">Name</label>
                    <input 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        id="name" 
                        className="form-control" 
                        type="text" 
                    />
                </div>
                <div className="form-group" action="">
                    <label htmlFor="location">Location</label>
                    <input 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        id="location" 
                        className="form-control" 
                        type="text" 
                    />
                </div>
                <div className="form-group" action="">
                    <label htmlFor="price_range">Price Range</label>
                    <select 
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="custom-select my-0 mr-sm-2">
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default UpdateRestaurant;