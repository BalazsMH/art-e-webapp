import React, {useState, useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';

export default function ArtCard(props) {

    const [artDetails, setArtDetails] = useState(props.data);
    const [hasImage, setHasImage] = useState(props.data.hasImage);
    const [imageUrl, setImageUrl] = useState();

    const observer = useRef();
    const lastArtworkRef = useCallback(node => {
        console.log(node);
    });

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
 