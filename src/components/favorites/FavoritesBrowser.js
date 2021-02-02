import React, { useState, useEffect, useParams } from 'react';
import ArtCard from '../BrowseComponent/ArtCard';
import styled from 'styled-components';
import axios from 'axios';

const FavoritesBrowser = () => {
    let { userId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [artData, setArtData] = useState([]);
    
    useEffect(() => {
        axios({
            method: 'GET',
            url:`http://localhost:8080/api/favorites${userId}`
        }).then(res => {
            setArtData(res.data.artObjects);
            setIsLoading(false);
            console.log("Load complete..");
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        });
    }, [userId])

    if (isLoading) {
        return (<div>Favorites loading..</div>);
    }
    
    return (
        <BrowserDiv>
            <GridContainer>   
            {artData.length !== 0 ? artData
                .map((artPiece, index) => <ArtCard data={artPiece} key={index}></ArtCard>)
            : <div>No favorites found.</div>}
            </GridContainer>
        </BrowserDiv>
    )
}

const GridContainer = styled.div`
    display: grid;
    padding: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 1rem;
`;

const BrowserDiv = styled.div`
`;

export default FavoritesBrowser;