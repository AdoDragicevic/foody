import { RestaurantMenuFormExtrasProps } from "../../../../models/props";


const RestaurantMenuFormExtras = ({ extras, onChange }: RestaurantMenuFormExtrasProps) => {

  if (!extras.length) return null;

  return (
    <fieldset className="restaurant-menu-form__fieldset">
      <legend className="restaurant-menu-form__legend"> Extras <small>(optional)</small> </legend>
      {extras.map( extra => (
        <div className="restaurant-menu-form__input-box" key={extra.id}>
          <input
            id={extra.id}
            className="restaurant-menu-form__input"
            type="checkbox" 
            onChange={ () => onChange(extra)}
          />
          <label className="restaurant-menu-form__label restaurant-menu-form__label--extra" htmlFor={extra.id}>  
            <span>
              {extra.name}
            </span>
            <span>
              {extra.price.toFixed(2)} 
            </span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RestaurantMenuFormExtras;