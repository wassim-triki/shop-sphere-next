import { Star } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Using react-icons for stars
import { cn } from "~/lib/utils";

const StarRating = ({
  rating = 0,
  length = 5,
  className,
}: {
  rating: number;
  length?: number;
  className?: string;
}) => {
  // This will create an array of 5 stars where each star is fully filled, half-filled, or empty based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= length; i++) {
      if (rating >= i) {
        // Full star
        stars.push(
          <Star
            key={i}
            className={cn("text-yellow fill-yellow h-5 w-5", className)}
          />,
        );
      } else {
        // Empty star
        stars.push(
          <Star
            key={i}
            className={cn("h-5 w-5 fill-gray-300 text-gray-300", className)}
          />,
        );
      }
    }
    return stars;
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default StarRating;
