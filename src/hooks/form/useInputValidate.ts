import useControlledInput from "./useControlledInput";
import { InputValidate } from "../../models/form";


export const useInputValidate = (initVal = "", validator: (val: string) => boolean): InputValidate => {
  const [value, onChange] = useControlledInput(initVal);
  const isValid = validator(value);
  return { value, onChange, isValid };
};