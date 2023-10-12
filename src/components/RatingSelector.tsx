import { useState } from "react";
import { StarIcon } from "@/utils/Icons";

interface RatingSelectorProps {
  onRatingChange?: (rating: number) => void;
}

const RatingSelector: React.FC<RatingSelectorProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRatingClick = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center space-x-1 justify-between w-full">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => handleRatingClick(value)}
          className="cursor-pointer"
          onMouseEnter={() => setHover(value)}
          onMouseLeave={() => setHover(rating)}
        >
          <StarIcon
            className={`w-8 h-8 ${
              value <= (hover || rating) ? "text-yellow-300" : "text-gray-500"
            } hover:text-yellow-300 transition-colors delay-100`}
          />
        </button>
      ))}
    </div>
  );
};

export default RatingSelector;
