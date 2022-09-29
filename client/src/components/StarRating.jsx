import React from 'react';

const StarRating = ({rating}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={"star-".concat(i)} className="fas fa-star text-warning"></i>);
        } 
        // else if below check if rating is a decimal to give half 
        // stars. Eg: 3.2 get 3 full stars and 1 half star
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={"star-".concat(i)} className="fas fa-star-half-alt text-warning"></i>)
        }
        else {
            stars.push(<i key={"star-".concat(i)} className="far fa-star text-warning"></i>);
        }
    }

    return (
        <>
          {stars}
        </>
    );
};

export default StarRating;