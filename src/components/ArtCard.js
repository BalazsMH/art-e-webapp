import React, {useState} from 'react';
import styled from 'styled-components';

export default function ArtCard(props) {

    const [artDetails, setArtDetails] = useState(props.data);
    const [hasImage, setHasImage] = useState(props.data.hasImage);
    const [imageUrl, setImageUrl] = useState(props.data.webImage.url)

    return (
        <ArtContainer>
            <ArtPicture src={imageUrl} alt={artDetails.title}></ArtPicture>
            {artDetails.title}
            
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
 