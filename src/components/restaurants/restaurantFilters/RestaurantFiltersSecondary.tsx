import { IoPizzaOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { GiBarbecue } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { TbMeat } from "react-icons/tb";
import { GiSushis } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { GiNoodles } from "react-icons/gi";
import { FaPepperHot } from "react-icons/fa";
import useToggleSearchParam from "../../../hooks/useToggleSearchParam";
import RestaurantFiltersHeader from "./RestaurantFiltersHeader";
import ToggleBtn from "../../UI/ToggleBtn";


const RestaurantFiltersMain = () => {

  const [foods, updateFoods] = useToggleSearchParam("food");

  return (
    <>
      <RestaurantFiltersHeader text="More Filters" />
      <ul className="restaurant-filters__list">
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Meat" 
            icon={<TbMeat />} 
            onClick={ () => updateFoods("meat") }
            isActive={foods.has("meat")} 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="BBQ" 
            icon={<GiBarbecue />} 
            onClick={ () => updateFoods("bbq")  } 
            isActive={foods.has("bbq")} 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Pizza" 
            icon={<IoPizzaOutline />} 
            onClick={ () => updateFoods("pizza")  } 
            isActive={foods.has("pizza")} 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Burger" 
            icon={<GiHamburger />} 
            onClick={ () => updateFoods("burger")  } 
            isActive={foods.has("burger")} 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Asian" 
            icon={<GiNoodles />} 
            onClick={ () => updateFoods("asian") } 
            isActive={ foods.has("asian") } 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Sushi" 
            icon={<GiSushis />} 
            onClick={ () => updateFoods("sushi") } 
            isActive={ foods.has("sushi") } 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Mexican" 
            icon={<FaPepperHot />} 
            onClick={ () => updateFoods("mexican") } 
            isActive={ foods.has("mexican") } 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Soup" 
            icon={<TbSoup />} 
            onClick={ () => updateFoods("soup") } 
            isActive={ foods.has("soup") } 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Desert" 
            icon={<RiCake3Line />} 
            onClick={ () => updateFoods("desert") } 
            isActive={ foods.has("desert") } 
          />
        </li>
        <li className="restaurant-filters__list-item">
          <ToggleBtn 
            text="Drink" 
            icon={<BiDrink />} 
            onClick={ () => updateFoods("drink") } 
            isActive={ foods.has("drink") } 
          />
        </li>
      </ul>
    </>
  );
};

export default RestaurantFiltersMain;