import React from 'react';
import Routes from './routes'
/** Context API */
import AuthContextProvider from './context/AuthContext';


import './App.css';

const App = () => {

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
};

export default App;
