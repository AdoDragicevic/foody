export interface Restaurant {
  info: RestaurantInfo;
  contact: RestaurantContact;
  menu: {
    [category: string]: MenuItem[];
  };
  reviews: {
    [authorId: string]: Review;
  }
}

export interface RestaurantInfo {
  name: string;
  averageDeliveryTimeInMinutes: number;
  discountPercent: number;
}

export interface RestaurantContact {
  email: string;
  phone: number;
  address: {
    street: string;
    streetNumber: string;
  }
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Review {
  authorId: string;
  text: string;
  rating: number;
  date: Date;
}