import React from "react";

interface Props {
  rating: number;
}

const ProductRating = ( { rating }: Props) => {
  return (
    <div className="flex py-2">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const starImage =
          starValue <= rating
            ? "/ico/icons8-star-filled.png"
            : "/ico/icons8-star.png";
        return (
            <img
              key={index}
              src={starImage}
              alt={`Star ${starValue}`}
              className="cursor-pointer w-6 h-6"
            />
        );
      })}
    </div>
  );
};

export default ProductRating;
