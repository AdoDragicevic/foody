import RestaurantFiltersMain from "./RestaurantFiltersMain";
import RestaurantFiltersSecondary from "./RestaurantFiltersSecondary";


const RestaurantFilters = () => {
  
  return (
    <aside className="restaurant-filters">
      <RestaurantFiltersMain />
      <hr className="horizontal-rule" />
      <RestaurantFiltersSecondary />
    </aside>
  );

};

export default RestaurantFilters;