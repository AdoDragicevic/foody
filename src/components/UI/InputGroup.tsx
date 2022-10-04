import { InputGroupProps } from "../../models/props";


const InputGroup = ({ name, type, value, onChange, errorMsg }: InputGroupProps) => (
  <div>
    <label className="label" htmlFor={name}>{name}</label>
    <input
      className="input"
      id={name}
      type={type} 
      value={value} 
      onChange={onChange} 
      autoComplete="off"
    />
    <span>{errorMsg}</span>
  </div>
);

export default InputGroup;