import React, {useContext, useRef, useCallback} from 'react';
import ArtCard from './ArtCard';
import styled from 'styled-components';
import ArtSearchBox from './ArtSearchBox';
import QueryTagContainer from './QueryTagContainer';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function ArtBrowser() {

    const [artData, isLoading, addQueryParam, query] = useContext(ArtBrowserContext);
    const observer = useRef();
    const lastArtworkRef = useCallback();

    if (isLoading) {
        return (
            <div>Please wait..</div>
        )
    }

    return (
        <div>
        <ArtBrowserSidebar>
            <ArtSearchBox></ArtSearchBox>
            <QueryTagContainer></QueryTagContainer>
        </ArtBrowserSidebar>
        <ArtBrowserContainer>
            {artData.length !== 0? artData.map((artPiece, index) => {
                if (artData.length === index+1) {
                    return <ArtCard ref={lastArtworkRef} data={artPiece} key={index}></ArtCard>
                } else {
                    return <ArtCard data={artPiece} key={index}></ArtCard>
                }
            }) : <div>No results found for the term "{query}".</div>}
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
