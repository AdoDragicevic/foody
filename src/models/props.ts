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

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PictureCardProps {
  img: string;
  title: string;
  leadsToUrl: string;
}

export interface ToggleBtnProps {
  text: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export interface RestaurantFiltersHeaderProps {
  text: string;
}

export interface StarsRatingProps {
  rating: number;
}