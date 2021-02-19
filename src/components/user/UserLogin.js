import React, {useState, useContext} from 'react';
import { LoginContainer, LoginCard, LoginForm, LoginInput, LoginButton } from '../Styles.js';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import cookie from 'react-cookies';


const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setLoginOrLogoutTriggered} = useContext(UserInfoContext);



    const handleLoginSubmit = (e) => {
        e.preventDefault();
        sendUserCredentials();
        console.log("Logged in!");
    }

    const sendUserCredentials = () => {
        axios({
            method: 'POST',
            url:'http://localhost:8080/api/auth/login',
            params: {
                    email: email,
                    password: password
                    }
        }).then(res => {
            console.log(res);
            if(res.data.email) {
                alert('login successful');
                cookie.save("Authorization", "Bearer " + res.data.token, { path: '/', maxAge:259200  });
                setLoginOrLogoutTriggered(true);
            } else {
                alert('invalid credentials');
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <LoginContainer>
        <LoginCard>
            <LoginForm onSubmit={(e)=>handleLoginSubmit(e)}>
                <label>Email </label>
                <LoginInput onChange={(e) => setEmail(e.target.value)} value={email}  type="text" name="email" placeholder="Enter your email here" required />
                <label>Password </label>
                <LoginInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="pwd" placeholder="Enter your password here" required />
                <LoginButton type="submit">Login</LoginButton>
            </LoginForm>
        </LoginCard>
        </LoginContainer>
    )
}

export default UserLogin;
