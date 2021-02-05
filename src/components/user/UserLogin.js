import React from 'react';
import { LoginContainer, LoginCard, LoginForm, LoginInput, LoginButton } from '../Styles.js';

const UserLogin = () => {
    let userName, password;
    
    const handleChange = (e, targetVar) => {
        targetVar = e.target.value;
    }

    const handleLoginSubmit = () => {
        console.log("Logged in!");
    }

    return (
        <LoginContainer>
        <LoginCard>
            <LoginForm>
                <label>Username </label>
                <LoginInput onChange={(e) => handleChange(e, userName)} type="text" name="userName" placeholder="Enter your username here" />
                <label>Password </label>
                <LoginInput onChange={(e) => handleChange(e, password)} type="password" name="pwd" placeholder="Enter your password here" />
                <LoginButton onClick={() => handleLoginSubmit}>Login</LoginButton>
            </LoginForm>
        </LoginCard>
        </LoginContainer>
    )
}

export default UserLogin;
