import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ArtCard from './ArtCard';
import styled from 'styled-components';
import ArtSearchBox from './ArtSearchBox';


export default function ArtBrowser() {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [query, setQuery] = useState("");

    const addQueryParam = (queryParam)=> {
        console.log(queryParam);
        setQuery(queryParam);
    }

    let resultPage = 0;
    let resultsPerPage = 5;

    useEffect(() => {
        setIsloading(true);
        axios({
            method: 'GET',
            url:'https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json',
            params: {q: query, p: resultPage, ps: resultsPerPage}
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

    return (
        <div>
        <ArtSearchBox addQueryParam={addQueryParam}></ArtSearchBox>

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
