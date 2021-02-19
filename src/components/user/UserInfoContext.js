import React, {useState, useEffect, createContext} from 'react';
import cookie from 'react-cookies';


export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginTriggered, setLoginTriggered] = useState(false);

    const [avatarLocation, setAvatarLocation] = useState();

    useEffect(() => {
        if (cookie.load("Authorization")){
            setIsLoggedIn(true);
        }
        setLoginTriggered(false);
    }, [loginTriggered])
    
    return (
        <UserInfoContext.Provider value={{isLoggedIn, setLoginTriggered, avatarLocation}}>
            {props.children}
        </UserInfoContext.Provider>
    );
}
