import { ChangeEvent } from "react";


export interface InputValidate {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}