import { ReactNode } from "react";

export interface ChildrenProp {
  children: ReactNode;
}

export interface HeaderProps extends ChildrenProp {
  className?: string;
}