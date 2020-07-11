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
}
export const authContext = createContext<IsAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {}
});
const { Provider } = authContext;
const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );
return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};
export default AuthProvider;