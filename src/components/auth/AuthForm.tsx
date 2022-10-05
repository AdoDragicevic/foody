import InputGroup from "../../components/UI/InputGroup";
import useAuthForm from "../../hooks/auth/useAuthForm";


const AuthForm = () => {

  const {
    isLogIn,
    toggleIsLogIn,
    email,
    password,
    confirmPassword,
    handleSubmit,
  } = useAuthForm();

  return (
    <form className="form mt-xl" onSubmit={handleSubmit}>
      <h2 className="h-secondary txt-center mb-md"> {isLogIn ? "LogIn" : "SignUp"} </h2>
      <fieldset className="fieldset">
 
        <InputGroup 
          name="email" 
          type="email" 
          onChange={email.onChange} 
          errorMsg={email.error} 
          value={email.value}
        />
            
        <InputGroup 
          name="password" 
          type="password" 
          onChange={password.onChange} 
          errorMsg={password.error} 
          value={password.value}
        />
            
        {
        !isLogIn &&
          <InputGroup 
            name="confirm password" 
            type="password" 
            onChange={confirmPassword.onChange} 
            errorMsg={confirmPassword.error} 
            value={confirmPassword.value} 
          />
        }
      </fieldset>
          
      <footer className="form__btns">
        <button className="btn btn-main" type="submit">
          Submit
        </button>
        <button
          className="btn btn-secondary mt-lg txt" 
          type="button" 
          onClick={toggleIsLogIn}
        > 
          {isLogIn ? "Create account" : "LogIn with existing account"}
        </button>
      </footer>
    </form>
  );
};

export default AuthForm;