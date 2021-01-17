import React, {useState, createContext} from 'react';

export const ArtBrowserContext = createContext();


export const ArtDataProvider = (props)=> {

    const proba = "heelloo";

    return (
        <ArtBrowserContext.Provider value={proba}>
            {props.children}
        </ArtBrowserContext.Provider>
    )
}
