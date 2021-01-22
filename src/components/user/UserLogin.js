import React from 'react';
import styled from 'styled-components';


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
                <Input onChange={(e) => handleChange(e, userName)} type="text" name="userName" placeholder="Enter your username here" />
                <label>Password </label>
                <Input onChange={(e) => handleChange(e, password)} type="password" name="pwd" placeholder="Enter your password here" />
                <Button onClick={() => handleLoginSubmit}>Login</Button>
            </LoginForm>
        </LoginCard>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem;
`;

const Input = styled.input`
    padding: 1rem;
`;

const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem;
    margin: 1rem;
`;

const LoginCard = styled.div`
    display: flex;
    /* height: 100%; */
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 5rem;
    box-shadow: 6px 6px 24px 0px rgba(50, 50, 50, 0.7);
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 2 rem;
`;

export default UserLogin;