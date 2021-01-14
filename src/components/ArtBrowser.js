import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ArtCard from './ArtCard';
import styled from 'styled-components';


export default function ArtBrowser() {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    let query = "";
    let resultPage = 0;
    let resultsPerPage = 10;

    useEffect(() => {
        axios({
            method: 'GET',
            url:'https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json',
            params: {q: query, p: resultPage, ps: resultsPerPage}
        })
        .then(res => setArtData(res.data.artObjects))
        .then(setIsloading(!isLoading))
        .then(console.log("Load complete.."))
        .catch(e => {
            console.log(e);
        });


        // axios.get("https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json")

    }, [])

    if (isLoading) {
        return (

            <div>Please wait..</div>
        )
    }

    return (
        <ArtBrowserContainer>{artData.map((artPiece, key) => (
        <ArtCard data={artPiece} key={key}></ArtCard>
        ))}
        </ArtBrowserContainer>
    )
}

const ArtBrowserContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
`;
