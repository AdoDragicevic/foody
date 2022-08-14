import useToggle from "../../hooks/useToggle";
import { ToggleBtnProps } from "../../models/props";


const ToggleBtn = ({ text, icon, onClick }: ToggleBtnProps) => {

  const [isActive, toggleIsActive] = useToggle(false);

  const iconCSS = `toggle-btn__icon ${isActive && "toggle-btn__icon--active"}`;
  const textCSS = `toggle-btn__text ${isActive && "toggle-btn__text--active"}`;

  const handleClick = () => {
    toggleIsActive();
  };

  return (
    <button className="toggle-btn btn" onClick={handleClick}>
      <i className={iconCSS}>{icon}</i>
      <span className={textCSS}>{text}</span>
    </button>
  );
};

export default ToggleBtn;