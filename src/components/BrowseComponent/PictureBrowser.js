import React, { useContext } from 'react';
import useArtLoader from '../../hooks/useArtLoader';
import { ArtBrowserContext } from './ArtBrowserContext';
import ArtCard from './ArtCard';
import styled from 'styled-components';


const PictureBrowser = () => {
    const {query, pageNumber} = useContext(ArtBrowserContext);
    const {artData, isLoading, hasMore} = useArtLoader(query, pageNumber);

    if (isLoading) {
        return (
            <div>Please wait..</div>
        )
    }

    return (
        <BrowserDiv>
        {artData.length !== 0 ? artData
                .filter((artPiece) => artPiece.hasImage)
                .map((artPiece, index) => <ArtCard hasMore={hasMore} lastItem={artData.length === index + 1} data={artPiece} key={index}></ArtCard>)
            : <div>No results found for the term.</div>}
        </BrowserDiv>
    )
}

const BrowserDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;
export default PictureBrowser;