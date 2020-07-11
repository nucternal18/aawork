import React, { Suspense, useContext, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketPage from '../pages/Tickets-page';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Home from '../pages/Home';
import ErrorBoundary from '../components/ErrorBoundary';
import Spinner from '../components/Spinner';
import PrivateRoute from '../PrivateRoute';

import { authContext } from '../context/AuthContext';

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signed, setSigned] = useState(false)
  const { auth } = useContext(authContext);

  useEffect(() => {
    if (auth.token && auth.userid) {
      setIsAuthenticated(true)
      setSigned(true)
    }
  }, [auth.token, auth.userid])

  return (
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
          <PrivateRoute path='/dashboard'
            component={TicketPage}
            isAuthenticated={isAuthenticated}
            isSigned={signed}
          />
              
            </Suspense>
          </ErrorBoundary>
        </Switch>
  );
};

export default Routes;