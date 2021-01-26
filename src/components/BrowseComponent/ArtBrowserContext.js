import React, {useState, createContext} from 'react';

export const ArtBrowserContext = createContext();

export const ArtDataProvider = (props) => {

    const [query, setQuery] = useState({term: null,
                                        involvedMaker: null,
                                        technique: null,
                                        datingPeriod: null});

    const [pageNumber, setPageNumber] = useState(1);

    const setQueryParam = (queryParam) => {
        console.log(queryParam);
        setQuery(queryParam);
        console.log("setquery callled");
    };
    
    return (
        <ArtBrowserContext.Provider value={{setQueryParam, query, pageNumber, setPageNumber}}>
            {props.children}
        </ArtBrowserContext.Provider>
    );
}
