import React, {useState, useEffect, useRef, useCallback, useContext} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';

export default function ArtCard(props) {
    const artDetails = props.data;
    const imageUrl = props.data.headerImage.url;
    const {isLoading, setPageNumber, pageNumber} = useContext(ArtBrowserContext);

    const observer = useRef();
    const lastArtworkRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && props.hasMore) {
                console.log("visible");
                setPageNumber(pageNumber + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, props.hasMore]);

    return (
        <ArtContainer>
            <CardHeader>
            <ArtPicture src={imageUrl} alt={artDetails.title}></ArtPicture>
            </CardHeader>
            <CardBody>
                {artDetails.longTitle}
            </CardBody>
            
            {props.lastItem && <div ref={lastArtworkRef}></div>}
        </ArtContainer>
    )
}

const ArtPicture = styled.img`
    object-fit: cover;
    height: 20rem;
    width: 25rem;

`;

const CardHeader = styled.div`

`;

const CardBody = styled.div`

`;

const ArtContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 1rem;
    border: solid lightgray;
    border-radius: 10px;
`;
