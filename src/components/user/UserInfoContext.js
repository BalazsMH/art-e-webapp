import React, {useState, createContext} from 'react';

export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {

    const [isLoggedIn, setIsloggedIn] = useState(false);

    const [avatarLocation, setAvatarLocation] = useState();

    // const setQueryParam = (queryParam) => {
    //     console.log(queryParam);
    //     setQuery(queryParam);
    //     console.log("setquery callled");
    // };
    
    return (
        <UserInfoContext.Provider value={{isLoggedIn, avatarLocation}}>
            {props.children}
        </UserInfoContext.Provider>
    );
}
