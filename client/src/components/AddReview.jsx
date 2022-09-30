import React, { useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useParams, useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
            const newReview = await RestaurantFinder.post(`/${id}/addReview`, {
                name: name,
                review: reviewText,
                rating: rating
            });
            console.log(newReview);
        } catch (err) {
            console.log(err);
        };
        // Refreshing the page to re-render reviews elements
        navigate(0);
    }

    return (
        <div>
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" 
                            placeholder="Your name" 
                            className="form-control" 
                            type="text" 
                        />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select 
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            id="rating" 
                            className="custom-select"
                        >
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Review">Review</label>
                    <textarea 
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Your review" 
                        id="review" 
                        className="form-control"
                    >
                    </textarea>
                </div>
                <button onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default AddReview;