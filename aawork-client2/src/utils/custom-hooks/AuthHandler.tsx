import React, { useState} from "react";
/** Custom types */
import { UserAuth } from "../../custom-types";
/** Utils */
import { DEFAULT_USER_AUTH } from "../Consts";


const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = useState(initialState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuthStatus = (userAuth: UserAuth) => {
      localStorage.setItem("UserAuth", JSON.stringify(userAuth));
      setAuth(userAuth);
      setIsAuthenticated(true);
  };
  
  const setUnauthStatus = () => {
      localStorage.clear();
      setAuth(DEFAULT_USER_AUTH);
      setIsAuthenticated(false);
  };
  
  return {
      auth,
      setAuthStatus,
      setUnauthStatus,
      isAuthenticated
    };
};
export default useAuthHandler;