import { Link } from "react-router-dom";
import { PictureCardProps } from "../../models/props";
import { HiArrowNarrowRight } from "react-icons/hi";


const PictureCard = ({ title, img, leadsToUrl }: PictureCardProps) => (
  <Link to={leadsToUrl} className="picture-card">
    <img className="picture-card__img" src={img} alt="employee" />
    <h2 className="picture-card__title h-secondary">{title}</h2>
    <button className="picture-card__btn btn" to={leadsToUrl}>
      <HiArrowNarrowRight />
    </button>
  </Link>
);

export default PictureCard;