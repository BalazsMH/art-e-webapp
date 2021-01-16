import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ArtCard from './ArtCard';
import styled from 'styled-components';
import ArtSearchBox from './ArtSearchBox';


export default function ArtBrowser() {
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

    if (isLoading) {
        return (
            <div>Please wait..</div>
        )
    }

    //TODO: Move data load to provider

    return (
        <div>
        <ArtBrowserSidebar>
            <ArtSearchBox addQueryParam={addQueryParam}></ArtSearchBox>
        </ArtBrowserSidebar>
        <ArtBrowserContainer>
            {artData.length !== 0? artData.map((artPiece, key) => (
            <ArtCard data={artPiece} key={key}></ArtCard>
            )) : <div>No results found for the term "{query}".</div>}
        </ArtBrowserContainer>
        </div>
    )
}

const ArtBrowserContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
`;

const ArtBrowserSidebar = styled.div`
    float:left;
`;
