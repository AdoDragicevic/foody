import { ReactNode } from "react";
import { Restaurant } from "../models/restaurant";
import { ObjectWithId } from "./util";

export interface ChildrenProp {
  children: ReactNode;
}

export interface HeaderProps extends ChildrenProp {
  className?: string;
}

export interface RestaurantListProps {
  restaurants: (Restaurant & ObjectWithId )[];
}

export interface RestaurantProps {
  id: string;
  name: string;
  discount: number;
  averageDeliveryTimeInMinutes: number;
  rating: number;
  imgUrl: string;
}