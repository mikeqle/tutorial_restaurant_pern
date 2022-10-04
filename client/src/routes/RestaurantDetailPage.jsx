import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';

const RestaurantDetailPage = () => {
    const {id} = useParams();
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get(`/${id}`);
          setSelectedRestaurant(response.data.data);
        } catch (err) {
          console.log(err);
        };
      };

      fetchData();
    }, []);
  return (
    <div>
      {selectedRestaurant && (
      <>
        <h1 className="display-1 text-center">{selectedRestaurant.restaurant.name}</h1>
        <div className="text-center">
          <StarRating rating={selectedRestaurant.restaurant.avg_rating} />
          <span className="text-warning ml-1">
            { selectedRestaurant.restaurant.review_count
            ? `(${selectedRestaurant.restaurant.review_count})`
            : "(0)"}
            </span>
        </div>
        <div className="mt-3">
          <Reviews reviews={selectedRestaurant.reviews}/>
          <AddReview />
        </div>
      </>
    )}</div>
  )
};

export default RestaurantDetailPage;