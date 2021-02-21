import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import { UserInfoContext } from '../user/UserInfoContext';
import cookie from 'react-cookies';


const UserLogout = () => {
    const {setLoginOrLogoutTriggered} = useContext(UserInfoContext);    
    
    cookie.remove('Authorization', { path: '/' });

    setLoginOrLogoutTriggered(true);    

    return(
        <Redirect to="/" />
      );
    
}

export default UserLogout;
