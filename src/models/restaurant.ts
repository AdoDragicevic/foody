import { PriceRange } from "./price";


export interface Restaurant {
  // in db Restaurant is stored without id, after fetch we add the key under which it's stored as its id
  name: string;
  averageDeliveryTimeInMinutes: number;
  discount: number;
  rating: number;
  isOpen: boolean;
  priceRange: PriceRange;
  contact: RestaurantContact;
  typeOfFood: string[];
  menu: MenuCategory[];
  reviews: {
    [authorId: string]: Review;
  }
  imgUrl: string;
}

export interface RestaurantContact {
  email: string;
  phone: number;
  address: {
    street: string;
    streetNumber: string;
  }
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
  extras: ExtraOrder[];
}

export interface ExtraOrder {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  options: string[] | null;
}

export interface Review {
  authorId: string;
  text: string;
  rating: number;
  date: Date;
}

export interface RestaurantFilters {
  criteria?: string;
  food?: string;
  search?: string;
}