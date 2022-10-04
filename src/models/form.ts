import { ChangeEvent } from "react";


export interface InputValidate {
  value: string;
  onUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}