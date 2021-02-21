import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtCard from '../BrowseComponent/ArtCard';
import axios from 'axios';
import { GridContainer } from '../Styles.js';

const FavoritesBrowser = () => {
    let { userId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [artData, setArtData] = useState([]);
    
    useEffect(() => {
        axios({
            method: 'GET',
            url:`http://localhost:8080/api/favorites/${userId}`
        }).then(res => {
            setArtData(res.data);
            setIsLoading(false);
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
        <div>
            <GridContainer>   
            {artData.length !== 0 ? artData
                .map((artPiece, index) => {
                    return <ArtCard data={artPiece} key={index}></ArtCard>
                })
            : <div>No favorites found.</div>}
            </GridContainer>
        </div>
    )
}

export default FavoritesBrowser;
