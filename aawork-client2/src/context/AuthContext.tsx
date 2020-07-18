import React, { createContext, FC } from "react";
/** Custom types */
import { UserAuth } from "../custom-types";
/** Custom Hooks */
import useAuthHandler from "../utils/custom-hooks/AuthHandler";
/** Utils */
import { DEFAULT_USER_AUTH } from "../utils/Consts";
import { getStoredUserAuth } from "../utils/Helpers";

interface IsAuthContextInterface {
  auth: UserAuth;
  setAuthStatus: (userAuth: UserAuth) => void;
  setUnauthStatus: () => void;
  isAuthenticated: boolean;
}


export const AuthContext = createContext<IsAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {},
  isAuthenticated: false
});



const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  
  const { auth, setAuthStatus, setUnauthStatus, isAuthenticated } = useAuthHandler(
    getStoredUserAuth()
  );
return (
    <AuthContext.Provider value={{ auth, setAuthStatus, setUnauthStatus, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;