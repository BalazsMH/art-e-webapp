import React, {userState, createContext} from 'react';

export const ArtBrowserContext = createContext();


export const ArtBrowserProvider = (props)=> {


    return (
        <ArtBrowserContext.Provider>
            {props.children}
        </ArtBrowserContext.Provider>
    )
}
