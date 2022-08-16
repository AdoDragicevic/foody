import useToggle from "../../hooks/useToggle";
import { ToggleBtnProps } from "../../models/props";


const ToggleBtn = ({ text, icon, isActive, onClick }: ToggleBtnProps) => {

  const [active, toggleActive] = useToggle(isActive);

  const iconCSS = `toggle-btn__icon ${active && "toggle-btn__icon--active"}`;
  const textCSS = `toggle-btn__text ${active && "toggle-btn__text--active"}`;

  const handleClick = () => {
    toggleActive();
    onClick();
  };

  return (
    <button className="toggle-btn btn" onClick={handleClick}>
      <i className={iconCSS}>{icon}</i>
      <span className={textCSS}>{text}</span>
    </button>
  );
};

export default ToggleBtn;