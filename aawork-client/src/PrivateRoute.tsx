import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';


interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  isAuthenticated: boolean;
  isSigned: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, isAuthenticated, path, ...rest}) => {
  console.log(isAuthenticated)

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? 
          <Route component={Component}/> 
          : <Redirect
            to={{ pathname: "/signin" }}
          />
      }
      />
      
  );
}

export default PrivateRoute;
