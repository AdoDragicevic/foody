import { ChangeEvent, FormEvent, MouseEvent, ReactNode } from "react";
import { ExtraOrder, MenuCategory, MenuItem, Restaurant } from "../models/restaurant";
import { ObjectWithId } from "./util";
import { PriceRange } from "./price";
import { RestaurantContact } from "../models/restaurant";


export interface ChildrenProp {
  children: ReactNode;
}

export interface HeaderProps {
  children?: ReactNode;
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

export interface DollarsProps {
  num: number;
  max: number;
}

export interface RestaurantInfoProps {
  name: string;
  averageDeliveryTimeInMinutes: number;
  rating: number;
  priceRange: PriceRange;
  contact: RestaurantContact;
}

export interface RestaurantMenuProps {
  menu: MenuCategory[];
}

export interface RestaurantMenuCategoryProps {
  category: string;
  items: MenuItem[];
  extras: ExtraOrder[];
}

export interface RestaurantMenuItemProps {
  item: MenuItem;
  extras: ExtraOrder[];
}

export interface RestaurantMenuFormProps extends RestaurantMenuItemProps {
  onClose: () => void;
}

export interface RestaruantMenuItemOptionsProps extends RestaurantMenuItemProps {}

export interface ModalProps extends ChildrenProp {
  onClose: () => void;
}

export interface RestaurantMenuFormBtnsProps {
  onDecrement: () => void;
  onIncrement: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  quantity: number;
  price: string;
}

export interface RestaurantMenuFormOptionsProps {
  options: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface RestaurantMenuFormExtrasProps {
  extras: ExtraOrder[];
  onChange: (extra: ExtraOrder) => void;
}