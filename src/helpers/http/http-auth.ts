import { FetchAuthType } from "../../models/htttp";

const API_KEY = "AIzaSyBnvteDMvczEaWRw0WrIHSGyfRo3fJDpo4";
const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const LOG_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;


export const fetchAuth = (email: string, password: string, type: FetchAuthType) => {
  
  const url = type === FetchAuthType.SIGN_UP ? SIGN_UP_URL : LOG_IN_URL;
  
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
};