import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const ArtBrowserContext = createContext();


export const ArtDataProvider = (props)=> {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [query, setQuery] = useState({term: null,
                                        involvedMaker: null,
                                        technique: null,
                                        datingPeriod: null});


    const addQueryParam = (queryParam)=> {
        console.log(queryParam);
        setQuery(queryParam);
    }

    let resultPage = 0;
    let resultsPerPage = 10;

    useEffect(() => {
        setIsloading(true);
        axios({
            method: 'GET',
            url:'https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json',
            params: {...(query.term ? {q : query.term} : {}),
                    p: resultPage,
                    ps: resultsPerPage,
                    ...(query.involvedMaker ? {q : query.involvedMaker} : {}),
                    ...(query.technique ? {q : query.technique} : {}),
                    ...(query.datingPeriod ? {q : query.datingPeriod} : {})
                }
        })
        .then(res => { 
            setArtData(res.data.artObjects);
            setIsloading(false);
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        });
    }, [query])


    return (
        <ArtBrowserContext.Provider value={[artData, isLoading, addQueryParam, query]}>
            {props.children}
        </ArtBrowserContext.Provider>
    )
}
