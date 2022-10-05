import { InputGroupProps } from "../../models/props";


const InputGroup = ({ name, type, value, onChange, errorMsg }: InputGroupProps) => (
  <div className="input-group">
    <label className="input-group__label" htmlFor={name}>{name}</label>
    <input
      className={`input-group__input ${errorMsg ? "input-group__input--error" : ""}`}
      id={name}
      type={type} 
      value={value} 
      onChange={onChange} 
      autoComplete="off"
    />
    <p className="input-group__error">
      {errorMsg}
    </p>
  </div>
);

export default InputGroup;