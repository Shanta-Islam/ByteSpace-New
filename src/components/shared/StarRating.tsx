import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  sizeClassName?: string;
  activeColorClassName?: string;
  inactiveColorClassName?: string;
  showValue?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  sizeClassName = "w-3.5 h-3.5",
  activeColorClassName = "text-[#4b4c53]",
  inactiveColorClassName = "text-gray-200",
  showValue = false,
  className = "",
}: StarRatingProps) {
  const roundedRating = Math.round(rating);

  return (
    <div
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label={`Rated ${rating.toFixed(1)} out of ${maxRating} stars`}
    >
      {showValue && (
        <span className="font-medium text-inherit">{rating.toFixed(1)}</span>
      )}
      <div className="inline-flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: maxRating }).map((_, index) => {
          const isFilled = index < roundedRating;
          return (
            <FaStar
              key={index}
              className={`${sizeClassName} ${
                isFilled ? activeColorClassName : inactiveColorClassName
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
