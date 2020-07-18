import React from 'react';
import Routes from './routes';

// Component
import Header from './components/header';

/** Context API */
import AuthContextProvider from './context/AuthContext';


const App = () => {

  return (
    <AuthContextProvider>
      <Header />
      <Routes />
    </AuthContextProvider>
  );
};

export default App;

