import React, {useState, useEffect, createContext} from 'react';
import cookie from 'react-cookies';


export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginOrLogoutTriggered, setLoginOrLogoutTriggered] = useState(false);

    const [avatarLocation, setAvatarLocation] = useState();

    useEffect(() => {
        if (cookie.load("Authorization")){
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        setLoginOrLogoutTriggered(false);
    }, [loginOrLogoutTriggered])
    
    return (
        <UserInfoContext.Provider value={{isLoggedIn, setLoginOrLogoutTriggered, avatarLocation}}>
            {props.children}
        </UserInfoContext.Provider>
    );
}
