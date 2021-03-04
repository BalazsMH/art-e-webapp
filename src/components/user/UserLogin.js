import React, {useState, useContext} from 'react';
import { LoginContainer, LoginCard, LoginForm, LoginInput, LoginButton } from '../Styles.js';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';


const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setloginSuccess] = useState(false);
    const {setUserName } = useContext(UserInfoContext);
    const {setLoginOrLogoutTriggered} = useContext(UserInfoContext);


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        sendUserCredentials();
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
            console.log();
            if(res.data.email) {
                cookie.save("Authorization", "Bearer " + res.data.token, { path: '/', maxAge:259200  });
                setLoginOrLogoutTriggered(true);
                setloginSuccess(true);
                setUserName(res.data.username);
                cookie.save("username", res.data.username,{ path: '/', maxAge:259200  });

            } else {
                alert('invalid credentials');
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    if (loginSuccess) {return <Redirect to="/"/>};
    return (
        <LoginContainer>
        <LoginCard height="auto">
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
