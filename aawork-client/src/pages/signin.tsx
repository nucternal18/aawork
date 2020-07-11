import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
import { authContext } from "../context/AuthContext";

// Utils
import { validateLoginForm } from '../utils/Helpers'

const Signin = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, showError } = useErrorHandler(null);
  const [loading, setLoading] = useState(false);
  const auth = useContext(authContext);
    
    

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const result = await axios.post('/api/signin', { email, password });
        if (result) {
            console.log(result.data);
          const { userid, email, token } = result.data;
          auth.setAuthStatus({ userid, email, token });
          setUsername('');
        setPassword('');
      } else {
        showError('The username or password provided were incorrect!');
      }
      
    } catch (error) {
      setLoading(false);
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
          <LogButton type='submit' disabled={loading} >
            {loading ? "Loading...": "Sign In"}
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
