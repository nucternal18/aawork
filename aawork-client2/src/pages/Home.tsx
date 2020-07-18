import React from "react";
import { Link } from 'react-router-dom';
import { BodyImg, Body, LogButton, LoginForm, LoginFormH1 } from "../components/FormComp";

function Home () {
    return (
        <BodyImg>
        <Body>
            <LoginForm>
            <LoginFormH1>Welcome</LoginFormH1>

            <Link to="/dashboard">
                <LogButton>continue</LogButton>
            </Link>
                    
            </LoginForm>
        </Body>
        </BodyImg>
        
    );
}

export default Home;
