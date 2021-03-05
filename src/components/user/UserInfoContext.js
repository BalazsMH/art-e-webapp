import React, {useState, useEffect, createContext} from 'react';
import cookie from 'react-cookies';


export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {

    const allFavFolderName = "All";
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginOrLogoutTriggered, setLoginOrLogoutTriggered] = useState(false);
    const [userName, setUserName] = useState();
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
        <UserInfoContext.Provider value={{isLoggedIn, setLoginOrLogoutTriggered, avatarLocation, userName, setUserName, allFavFolderName}}>
            {props.children}
        </UserInfoContext.Provider>
    );
}
