import { Restaurant } from "../models/restaurant";
import { ObjectWithId } from "../models/util";
import { PriceRange } from "../models/price";

export const filterRestaurantsByName = (restaurants: (Restaurant & ObjectWithId)[], name: string): (Restaurant & ObjectWithId)[] => (
  restaurants.filter( restaurant => {
    const restaurantName = restaurant.name.toLowerCase();
    const searchTerm = name.toLowerCase();
    return restaurantName.includes(searchTerm);
  })
);

export const filterRestaurantsByFilters = (restaurants: (Restaurant & ObjectWithId)[], filters: string[]): (Restaurant & ObjectWithId)[] => {
  const criteria = new Set( filters );  
  if (criteria.has("discount")) {
    restaurants = restaurants.filter(restaurant => !!restaurant.discount);
  }
  if (criteria.has("rating")) {
    restaurants = restaurants.filter(restaurant => restaurant.rating === 5);
  }
  if (criteria.has("delivery")) {
    restaurants = restaurants.filter(restaurant => restaurant.averageDeliveryTimeInMinutes <= 30);
  }
  if (criteria.has("price")) {
    restaurants = restaurants.filter(restaurant => restaurant.priceRange === PriceRange.$);
  }
  if (criteria.has("open")) {
    restaurants = restaurants.filter(restaurant => restaurant.isOpen);
  }
  return restaurants;
};