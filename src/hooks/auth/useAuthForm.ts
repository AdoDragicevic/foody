import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCtx } from "../../contexts/auth-context";
import useToggle from "../../hooks/useToggle";
import { useInputValidate } from "../../hooks/form/useInputValidate";
import { isEmailValid, isPasswordValid } from "../../helpers/form";


const useAuthForm = () => {

  const navigate = useNavigate();

  const { dispatch, requestStatus } = useContext(AuthCtx);

  const [isLogIn, toggleIsLogIn] = useToggle();
  const [wasSubmittedOnce, setWasSubmittedOnce] = useState(false);

  const email = useInputValidate("", isEmailValid);
  const password = useInputValidate("", isPasswordValid);
  const confirmPassword = useInputValidate("", () => true);

  const emailErrorMsg = wasSubmittedOnce && !email.isValid ? "Invalid email!" : "";
  const passwordErrorMsg = wasSubmittedOnce && !password.isValid ? "Password must have minimum of 6 characters." : "";
  const confirmPasswordErrorMsg = wasSubmittedOnce && password.value !== confirmPassword.value ? "Passwords are different!" : "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setWasSubmittedOnce(true);
    if (!email.isValid || !password.isValid) return;
    if (!isLogIn && password.value !== confirmPassword.value) return;
    const { logIn, signUp } = dispatch;
    isLogIn ? logIn(email.value, password.value) : signUp(email.value, password.value);
    navigate("/profile");
  };

  return {
    isLogIn,
    toggleIsLogIn,
    email: { ...email, error: emailErrorMsg },
    password: { ...password, error: passwordErrorMsg },
    confirmPassword: { ...confirmPassword, error: confirmPasswordErrorMsg },
    handleSubmit
  }

};

export default useAuthForm;

