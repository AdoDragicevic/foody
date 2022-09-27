import { RestaurantMenuFormOptionsProps } from "../../../../models/props";


const RestaurantMenuFormOptions = ({ options, onChange }: RestaurantMenuFormOptionsProps) => {

  if (!options.length) return null;

  return (
    <fieldset className="restaurant-menu-form__fieldset">
      <legend className="restaurant-menu-form__legend"> Options <small>(pick one)</small> </legend>
      { options.map( (option, i) => (
        <div className="restaurant-menu-form__input-box" key={option}>
          <input 
            id={`${i}-option`}
            className="restaurant-menu-form__input"
            type="radio" 
            defaultChecked={i === 0}
            value={option} 
            name="option" 
            onChange={onChange} 
          />    
          <label className="restaurant-menu-form__label" htmlFor={`${i}-option`}> 
            <div className="checkbox mr-sm"></div>
            {option}
          </label>
        </div>
      )) }
    </fieldset>
  );
};

export default RestaurantMenuFormOptions;