import React, {useContext} from 'react';
import ArtCard from './ArtCard';
import styled from 'styled-components';
import ArtSearchBox from './ArtSearchBox';
import QueryTagContainer from './QueryTagContainer';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function ArtBrowser() {

    const {artData, isLoading, query} = useContext(ArtBrowserContext);


    if (isLoading) {
        return (
            <div>Please wait..</div>
        )
    }

    return (
        <BrowserContainer>
            <ArtBrowserSidebar>
                <ArtSearchBox></ArtSearchBox>
                <QueryTagContainer></QueryTagContainer>
            </ArtBrowserSidebar>
            <PictureBrowser>
                {artData.length !== 0? artData.map((artPiece, index) => {
                    return <ArtCard lastItem={artData.length === index+1} data={artPiece} key={index}></ArtCard>
                }) : <div>No results found for the term "{query}".</div>}
            </PictureBrowser>
        </BrowserContainer>
    )
}

const BrowserContainer = styled.div`
    width:auto;
    max-width: 100%;
`;

const PictureBrowser = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ArtBrowserSidebar = styled.div`
    float:left;
    padding: 0.5rem;
    margin-top: 1rem;
`;
