import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { AuthCtx } from "../contexts/auth-context";
import useToggle from "../hooks/useToggle";
import { RequestStatus } from "../models/htttp";


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
      navigate("/restaurants");
    }
  }, [requestStatus, navigate] );


  return (
    <PageLayout>
      <main className="auth-page__main">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="h-secondary txt-center mb-md"> {isLogIn ? "LogIn" : "SignUp"} </h2>
          <fieldset className="fieldset">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email" 
              value={email} 
              onChange={updateEmail} 
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label" htmlFor="password">Password</label>
            <input 
              id="password" 
              className="input" 
              type="password"
              value={password} 
              onChange={updatePassword} 
            />
          </fieldset>
          {
            !isLogIn && (
              <fieldset className="fieldset">
                <label className="label" htmlFor="confirm-password">Confirm Password</label>
                <input 
                  id="confirm-password" 
                  className="input" 
                  type="password"
                  value={confirmPassword} 
                  onChange={updateConfirmPassword} 
                />
              </fieldset>
            )
          }
          <footer className="form__btns">
            <button className="form__btn btn btn-main" type="submit">Submit</button>
            <button 
              className="btn btn-secondary mt-lg txt" 
              type="button" 
              onClick={toggleIsLogIn}
              > 
                {isLogIn ? "Create account" : "LogIn with existing account"}
            </button>
          </footer>
        </form>
      </main>
    </PageLayout>
  );
};

export default AuthPage;