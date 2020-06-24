import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TicketPage from './pages/Tickets-page';
import Signin from './pages/signin';
import Signup from './pages/signup'
import Home from './pages/Home';
import Header from './components/header';

import './App.css';


const App = () => {
    return (
      <>
       <div >
         <Switch>
           <Route exact path='/' component={Home} /> 
           <Route exact path='/dashboard' component={TicketPage} />
           <Route path='/signin' component={Signin} />
           <Route path='/signup' component={Signup} />
         </Switch>
       </div>
      </>
    );
  }
  
  export default App;
