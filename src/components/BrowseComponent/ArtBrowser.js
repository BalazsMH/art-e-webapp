import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import ArtCard from './ArtCard';
import styled from 'styled-components';
import ArtSearchBox from './ArtSearchBox';
import QueryTagContainer from './QueryTagContainer';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function ArtBrowser() {

    const [artData, isLoading, addQueryParam, query] = useContext(ArtBrowserContext);

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
            <QueryTagContainer query={query}></QueryTagContainer>
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
