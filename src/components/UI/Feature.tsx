import { FeatureProps } from "../../models/props";


const Feature = ({ title, description, icon }: FeatureProps) => (
  <article className="feature">
    <div className="feature__icon-frame">
      {icon}
    </div>
    <h2 className="title-secondary">
      {title}
    </h2>
    <p className="feature__description">
      {description}
    </p>
  </article>
);

export default Feature;