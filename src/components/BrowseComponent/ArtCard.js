import React, {useState, useEffect, useRef, useCallback, useContext} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';

export default function ArtCard(props) {

    const [artDetails, setArtDetails] = useState(props.data);
    const [hasImage, setHasImage] = useState(props.data.hasImage);
    const [imageUrl, setImageUrl] = useState();
    const [artData, isLoading, addQueryParam, query, hasMore, setPage, resultPage] = useContext(ArtBrowserContext);

    const observer = useRef();
    const lastArtworkRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                console.log("visible");
                setPage(resultPage+1);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    useEffect(() => {
        if (hasImage) {
            setImageUrl(props.data.webImage.url);
        }

    }, [])

    return (
        <ArtContainer>
            {hasImage ? <ArtPicture src={imageUrl} alt={artDetails.title}></ArtPicture> : <span>No picture available</span> } 
            {artDetails.longTitle}
            {props.lastItem && <div ref={lastArtworkRef}></div>}
        </ArtContainer>
    )
}

const ArtPicture = styled.img`
    object-fit: contain;
    max-width: 300px;
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
 