import React, { Suspense, useContext, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketPage from '../pages/Dashboard';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import Account from '../pages/Account';
import Preferences from '../pages/Preferences';
import Support from '../pages/Support';
import { AuthRoute } from './AuthRoute';
import { NonAuthRoutes, AuthRoutes } from '../utils/Consts';

import { Spinner } from '../components/Spinner';

import { AuthContext } from '../context/AuthContext';


const Routes: React.FC = (): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.token && auth.userid) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);

    }
  }, [auth.token, auth.userid]);

  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path={NonAuthRoutes.landing} component={LandingPage} />
        <Route path={NonAuthRoutes.signup} component={Signup} />
        <Route path={NonAuthRoutes.login} component={Signin} />
        <AuthRoute
          path={AuthRoutes.home}
          isAuth={isAuthenticated}
          Component={Home}
        />
        <AuthRoute
          path={AuthRoutes.dashboard}
          isAuth={isAuthenticated}
          Component={TicketPage}
        />
        <AuthRoute
          path={AuthRoutes.preferences}
          isAuth={isAuthenticated}
          Component={Preferences}
        />
        <AuthRoute
          path={AuthRoutes.account}
          isAuth={isAuthenticated}
          Component={Account}
        />
        <Route path={NonAuthRoutes.support} component={Support} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
