import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Body, BodyImg, LogButton, SigninForm, SigninFormH1, BottomTxt, SignBody, TxtBox, TxtbInput } from "../components/FormComp";


const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(username, password)
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.message)
        }
        setUsername('')
        setPassword('')
    }
    return (
            <SignBody>
            <SigninForm onSubmit={handleSubmit}  id="signin-form">
                <div> <SigninFormH1>Login</SigninFormH1>
                <TxtBox>
                        <label htmlFor="username"/>
                        <TxtbInput 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
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
                    <LogButton type="button" onClick={handleSubmit}>Sign In</LogButton>
                    <BottomTxt className="bottom-text">
            Don't have account? <Link to="/signup">Sign Up</Link>

        </BottomTxt>
                </div>
            </SigninForm>
            </SignBody>
    );
}

export default Signin;