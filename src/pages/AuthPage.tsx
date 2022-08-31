import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { AuthCtx } from "../contexts/auth-context";
import { fetchAuth } from "../helpers/http/http-auth";
import useHttpStates from "../hooks/useHttpStates";
import useToggle from "../hooks/useToggle";
import { AuthResponseData, FetchAuthType, RequestStatus } from "../models/htttp";


const useControlledInput = (initVal = ""): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [val, setVal] = useState(initVal);
  const update = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  return [val, update];
};


const AuthPage = () => {

  const navigate = useNavigate();

  const [isLogIn, toggleIsLogIn] = useToggle();

  const [email, updateEmail] = useControlledInput("");
  const [password, updatePassword] = useControlledInput("");
  const [confirmPassword, updateConfirmPassword] = useControlledInput("");

  const { dispatch, requestStatus } = useContext(AuthCtx);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { logIn, signUp } = dispatch;
    isLogIn ? logIn(email, password) : signUp(email, password);
  };

  useEffect( () => {
    if (requestStatus === RequestStatus.SUCCESS) {
      navigate("/cart");
    }
  }, [requestStatus, navigate] );


  return (
    <PageLayout>
      <main className="auth-page__main">
        <form className="auth-page__form form" onSubmit={handleSubmit}>
          <h2 className="h-secondary txt-center mb-md"> {isLogIn ? "LogIn" : "SignUp"} </h2>
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="email">Email</label>
            <input
              id="email" 
              className="form__input"
              type="email" 
              value={email} 
              onChange={updateEmail} 
            />
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="password">Password</label>
            <input 
              id="password" 
              className="form__input" 
              type="password"
              value={password} 
              onChange={updatePassword} 
            />
          </fieldset>
          {
            !isLogIn && (
              <fieldset className="form__fieldset">
                <label className="form__label" htmlFor="confirm-password">Confirm Password</label>
                <input 
                  id="confirm-password" 
                  className="form__input" 
                  type="password"
                  value={confirmPassword} 
                  onChange={updateConfirmPassword} 
                />
              </fieldset>
            )
          }
          <fieldset className="form__fieldset form__btns">
            <button className="form__btn btn btn-main" type="submit">Submit</button>
            <button 
              className="btn btn-secondary mt-lg txt" 
              type="button" 
              onClick={toggleIsLogIn}
              > 
                {isLogIn ? "Create account" : "LogIn with existing account"}
            </button>
          </fieldset>
        </form>
      </main>
    </PageLayout>
  );
};

export default AuthPage;