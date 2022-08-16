import RestaurantFiltersHeader from "./RestaurantFiltersHeader";
import ToggleBtn from "../../UI/ToggleBtn";
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



const RestaurantFiltersMain = () => (
  <>
    <RestaurantFiltersHeader text="More Filters" />
    <ul className="restaurant-filters__list">
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Meat" 
          icon={<TbMeat />} 
          onClick={()=> console.log("btn click")}
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="BBQ" 
          icon={<GiBarbecue />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Pizza" 
          icon={<IoPizzaOutline />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Burger" 
          icon={<GiHamburger />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Asian" 
          icon={<GiNoodles />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Sushi" 
          icon={<GiSushis />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Mexican" 
          icon={<FaPepperHot />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Soup" 
          icon={<TbSoup />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Desert" 
          icon={<RiCake3Line />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
      <li className="restaurant-filters__list-item">
        <ToggleBtn 
          text="Drink" 
          icon={<BiDrink />} 
          onClick={()=> console.log("btn click")} 
          isActive={false} 
        />
      </li>
    </ul>
  </>
);

export default RestaurantFiltersMain;