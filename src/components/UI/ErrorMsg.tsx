import { useNavigate } from "react-router-dom";
import { ErrorMsgProps } from "../../models/props";
import WarningIcon from "./WarningIcon";


const ErrorMsg = ({ text }: ErrorMsgProps) => {
  
  const navigate = useNavigate();
  
  return (
    <article className="error-msg">
      <WarningIcon />
      <h2 className="h-tertiary mt-md mb-lg">{ text }</h2>
      <button className="btn btn-main" onClick={() => navigate(-1)}> 
        Go Back 
      </button>
    </article>  
  )
};

export default ErrorMsg;