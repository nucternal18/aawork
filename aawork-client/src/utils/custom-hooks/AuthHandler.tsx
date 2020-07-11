import React, { useState} from "react";
/** Custom types */
import { UserAuth } from "../../custom-types";
/** Utils */
import { DEFAULT_USER_AUTH } from "../Consts";


const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = useState(initialState);
const setAuthStatus = (userAuth: UserAuth) => {
    window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
    setAuth(userAuth);
  };
const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };
return {
    auth,
    setAuthStatus,
    setUnauthStatus
  };
};
export default useAuthHandler;