import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  LogButton,
  SigninForm,
  SigninFormH1,
  BottomTxt,
  SignBody,
  TxtBox,
  TxtbInput,
} from '../components/FormComp';

// Presentation
import ErrorMessage from '../components/ErrorMessage';

// Custom Hook
import useErrorHandler from '../utils/custom-hooks/ErrorHandler';

/** Context */
import { AuthContext } from "../context/AuthContext";

// Utils
import { validateLoginForm } from '../utils/Helpers'

//Constants
import { AuthRoutes } from '../utils/Consts';

const Signin = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, showError } = useErrorHandler(null);
  const auth = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
    
    

  const handleSubmit = async () => {
    try {
      const result = await axios.post('/api/signin', { email, password });
        if (result) {
            console.log(result.data);
          const { userid, email, token } = result.data;
          auth.setAuthStatus({ userid, email, token });
          history.push(
            location.state?.requestedPath ?? AuthRoutes.dashboard
          )
          setUsername('');
        setPassword('');
      } else {
        showError('The username or password provided were incorrect!');
      }
      
    } catch (error) {
      showError(error.message);
    }
  };
  
  return (
    <SignBody>
      <SigninForm onSubmit={e => {
        e.preventDefault();
        if (validateLoginForm(email, password, showError)) {
          handleSubmit();
        }
      }} >
        <div>
          {' '}
          <SigninFormH1>Login</SigninFormH1>
          <TxtBox>
            <label htmlFor='username' />
            <TxtbInput
              type='text'
              name='username'
              placeholder='Username'
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </TxtBox>
          <TxtBox>
            <label htmlFor='password' />
            <TxtbInput
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </TxtBox>
          <LogButton type='submit'  >
            Sign In
          </LogButton>
          {error && (
            <ErrorMessage errorMessage={error} />
          )}
          <BottomTxt className='bottom-text'>
            Don't have account? <Link to='/signup'>Sign Up</Link>
          </BottomTxt>
        </div>
      </SigninForm>
    </SignBody>
  );
};

export default Signin;
