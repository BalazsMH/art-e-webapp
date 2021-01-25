import React from 'react';
import styled from 'styled-components';

export default function ArtCard(props) {
    const artDetails = props.data;
    const imageUrl = props.data.headerImage.url;
    
    return (
        <ArtContainer>
            <CardHeader>
            <ArtPicture src={imageUrl} alt={artDetails.title}></ArtPicture>
            </CardHeader>
            <CardBody>
                {artDetails.longTitle}
            </CardBody>
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
