import { BsExclamationLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ErrorMsgProps } from "../../models/props";


const ErrorMsg = ({ text }: ErrorMsgProps) => {
  
  const navigate = useNavigate();
  
  return (
    <article className="error-msg">
      <div className="error-msg__icon-box">
        <BsExclamationLg />
      </div>
      <h2 className="h-tertiary mt-md mb-lg">{ text }</h2>
      <button className="btn btn-main" onClick={() => navigate(-1)}> 
        Go Back 
      </button>
    </article>  
  )
};

export default ErrorMsg;