import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const ArtBrowserContext = createContext();


export const ArtDataProvider = (props)=> {
    const [artData, setArtData] = useState([]);
    const [artWorkCount, setArtWorkCount] = useState(100);
    const [isLoading, setIsloading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [resultPage, setResultPage] = useState(0);
    const resultsPerPage = 20;
    //TODO: move default results per page to config file.
    const [query, setQuery] = useState({term: null,
                                        involvedMaker: null,
                                        technique: null,
                                        datingPeriod: null});


    const setQueryParam = (queryParam)=> {
        console.log(queryParam);
        setQuery(queryParam);
        setResultPage(0);
        console.log("setquery callled");
    }

    const setPage = (page)=> {
        setResultPage(page);
    }

    useEffect(() => {
        setArtData([]);
    }, [query])
    
    useEffect(() => {
        setIsloading(true);
        axios({
            method: 'GET',
            url:'https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json',
            params: {...(query.term ? {q : query.term} : {}),
                    p: resultPage,
                    ps: resultsPerPage,
                    imgonly: true,
                    ...(query.involvedMaker ? {q : query.involvedMaker} : {}),
                    ...(query.technique ? {q : query.technique} : {}),
                    ...(query.datingPeriod ? {q : query.datingPeriod} : {})
                }
        })
        .then(res => { 
            setArtData( prevData => {
                return [...prevData, ...res.data.artObjects];
            });
            setArtWorkCount(res.data.count);
            setHasMore(res.data.artObjects.length > 0);
            setIsloading(false);
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        });
    }, [query, resultPage])




    return (
        <ArtBrowserContext.Provider value={{artData, isLoading, setQueryParam, query, hasMore, setPage, resultPage}}>
            {props.children}
        </ArtBrowserContext.Provider>
    )
}
