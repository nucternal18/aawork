import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Body, BodyImg, LogButton, SigninForm, SigninFormH1, BottomTxt, SignBody, TxtBox, TxtbInput } from "../components/FormComp";


const Signin = () => {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(firstname, surname, email, password, confirmpassword)
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.message)
        }
        setFirstname('')
        setSurname('')
        setEmail('')
        setPassword('')
        setConfirmpassword('')
    }
    return (
            <SignBody>
            <SigninForm onSubmit={handleSubmit}  id="signin-form">
            <SigninFormH1>Sign Up</SigninFormH1>
                    <TxtBox>
                        <label htmlFor="firstname"/>
                        <TxtbInput 
                        type="text" 
                        name="firstname" 
                        placeholder="Firstname" 
                        value={firstname} 
                        onChange={e => setFirstname(e.target.value)}
                        />
                    </TxtBox>

                    <TxtBox>
                        <label htmlFor="surname"/>
                        <TxtbInput 
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        />
                    </TxtBox>

                    <TxtBox>
                        <label htmlFor="email"/>
                        <TxtbInput 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </TxtBox>

                      <TxtBox>
                        <label htmlFor="password"/>
                        <TxtbInput 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </TxtBox>

                    <TxtBox>
                        <label htmlFor="password"/>
                        <TxtbInput 
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={e => setPassword(e.target.value)}
                        />
                     </TxtBox>

                    <LogButton type="button" onClick={handleSubmit}>Sign Up</LogButton>
                    <BottomTxt className="bottom-text">
            Already have an account? <Link to="/signin">Sign In</Link>

        </BottomTxt>
            </SigninForm>
            </SignBody>
    );
}

export default Signin;