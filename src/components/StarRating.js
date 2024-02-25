import React, { useState } from 'react';
import "./starrating.css"
const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);

  const handleClick = (starValue) => {
    setSelectedStar(starValue);
  };

  const handleMouseEnter = (starValue) => {
    setSelectedStar(starValue);
  };

  const handleMouseLeave = () => {
    if (!selectedStar) {
      setSelectedStar(0);
    }
  };

  return (
    <div className="star-rating">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <span
            key={index + 1}
            data-star={index + 1}
            className={`star ${selectedStar >= index + 1 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index + 1)}
          >
            
          </span>
        ))}
    </div>
  );
};

export default StarRating;
