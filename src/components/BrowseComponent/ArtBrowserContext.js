import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const ArtBrowserContext = createContext();


export const ArtDataProvider = (props)=> {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [resultPage, setResultPage] = useState(0);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    //TODO: move default results per page to config file.
    const [isNewQuery, setIsNewQuery] = useState(false);
    const [query, setQuery] = useState({term: null,
                                        involvedMaker: null,
                                        technique: null,
                                        datingPeriod: null});


    const setQueryParam = (queryParam)=> {
        console.log(queryParam);
        setQuery(queryParam);
        setIsNewQuery(true);
        setResultPage(0);
        console.log("setquery callled");
    }


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
            setArtData( prevData => {
                if(isNewQuery) {
                    setIsNewQuery(false);
                    return res.data.artObjects;
                }
                return [...prevData, ...res.data.artObjects];
            });
            setIsloading(false);
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        });
    }, [query])


    return (
        <ArtBrowserContext.Provider value={[artData, isLoading, setQueryParam, query]}>
            {props.children}
        </ArtBrowserContext.Provider>
    )
}
