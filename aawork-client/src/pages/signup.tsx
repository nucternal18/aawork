import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {
  LogButton,
  SigninForm,
  SigninFormH1,
  BottomTxt,
  SignBody,
  TxtBox,
  TxtbInput,
  Error,
} from '../components/FormComp';

const Signin = () => {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
      try {
          if (password === confirmpassword) {
              setIsError(true);
        }
      await axios.post('/api/signup', {
        first_name,
        last_name,
        email,
        password
      });

      setIsAuthenticated(true);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setConfirmpassword('');
    } catch (error) {
      console.log(error.message);
    }
  };

    if (isAuthenticated) {
        return <Redirect to='/signin' />;
    } 
        return (
            <SignBody>
                <SigninForm onSubmit={handleSubmit} id='signin-form'>
                    <SigninFormH1>Sign Up</SigninFormH1>
                    <TxtBox>
                        <label htmlFor='firstname' />
                        <TxtbInput
                            type='text'
                            name='firstname'
                            placeholder='Firstname'
                            value={first_name}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </TxtBox>

                    <TxtBox>
                        <label htmlFor='surname' />
                        <TxtbInput
                            type='text'
                            name='lastname'
                            placeholder='Last Name'
                            value={last_name}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </TxtBox>

                    <TxtBox>
                        <label htmlFor='email' />
                        <TxtbInput
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <TxtBox>
                        <label htmlFor='password' />
                        <TxtbInput
                            type='password'
                            name='password'
                            placeholder='Confirm Password'
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                    </TxtBox>

                    <LogButton type='button' onClick={handleSubmit}>
                        Sign Up
        </LogButton>
                    {isError && (
                        <Error>The username or password provided were incorrect!</Error>
                    )}
                    <BottomTxt className='bottom-text'>
                        Already have an account? <Link to='/signin'>Sign In</Link>
                    </BottomTxt>
                </SigninForm>
            </SignBody>
        );

};

export default Signin;
