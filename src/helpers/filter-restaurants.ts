import { Restaurant, RestaurantFilters } from "../models/restaurant";
import { ObjectWithId } from "../models/util";
import { PriceRange } from "../models/price";


const filterRestaurantsByName = (restaurants: (Restaurant & ObjectWithId)[], name: string): (Restaurant & ObjectWithId)[] => (
  restaurants.filter( restaurant => {
    const restaurantName = restaurant.name.toLowerCase();
    const searchTerm = name.toLowerCase();
    return restaurantName.includes(searchTerm);
  })
);

const filterRestaurantsByFilters = (restaurants: (Restaurant & ObjectWithId)[], filters: string[]): (Restaurant & ObjectWithId)[] => {
  const criteria = new Set( filters );  
  let list = restaurants;
  if (criteria.has("discount")) {
    list = list.filter(restaurant => !!restaurant.discount);
  }
  if (criteria.has("rating")) {
    list = list.filter(restaurant => restaurant.rating === 5);
  }
  if (criteria.has("delivery")) {
    list = list.filter(restaurant => restaurant.averageDeliveryTimeInMinutes <= 30);
  }
  if (criteria.has("price")) {
    list = list.filter(restaurant => restaurant.priceRange === PriceRange.$);
  }
  if (criteria.has("open")) {
    list = list.filter(restaurant => restaurant.isOpen);
  }
  return list;
};

const filterRestaurantsByFood = (restaurants: (Restaurant & ObjectWithId)[], foods: string[]): (Restaurant & ObjectWithId)[] => {
  const food = new Set( foods );
  return restaurants = restaurants.filter(restaurant => {
    for (const foodType of restaurant.typeOfFood) {
      if (food.has(foodType)) return true;
    }
    return false;
  });
}

export const getFilteredRestaurants = (restaurants: (Restaurant & ObjectWithId)[], filters: RestaurantFilters): (Restaurant & ObjectWithId)[] => {
  if (!restaurants.length) return restaurants;
  let list = restaurants;
  if (filters.search) {
    list = filterRestaurantsByName(list, filters.search); 
  }
  if (filters.criteria) {
    list = filterRestaurantsByFilters(list, filters.criteria.split("-"));    
  }
  if (filters.food) {
    list = filterRestaurantsByFood(list, filters.food.split("-"));
  }
  return list;
};