import React from 'react';

const StarRating = ({ rating }) => {
  const validRating = typeof rating === 'number' ? rating : 5;
  const fullStars = Math.floor(validRating);
  let hasHalfStar = validRating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (hasHalfStar) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
        hasHalfStar = false; 
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }

    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <span>{validRating.toFixed(1)} Stars <span>⭐⭐⭐⭐⭐</span> | 3177 Google reviews</span>
    </div>
  );
};

export default StarRating;
