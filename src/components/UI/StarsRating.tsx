import { StarsRatingProps } from "../../models/props";
import { getHtmlStars } from "../../helpers/html";


const StarsRating = ({ rating }: StarsRatingProps) => {

  const stars = getHtmlStars(5, rating);

  return <>{stars}</>;
};

export default StarsRating;