import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Card, CardHeader, CardBody, CardFooter, Button} from 'grommet';
import {ShareOption} from 'grommet-icons';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import FavoriteButton from '../favorites/FavoriteButton';

export default function ArtCard(props) {
    let { userId } = useParams();
    userId = userId === undefined ? 0 : userId;
    const artDetails = props.data;
    const imageUrl = props.data.headerImage.url;
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url:`http://localhost:8080/api/favorites/${userId}/${artDetails.objectNumber}`
        })
        .then(res => {
            // TODO: set the color of the favorite symbol
            setIsFavorite(res.data);
            setIsLoading(false);
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        });
    }, [artDetails.objectNumber, userId]);

    if (isLoading) {
        return (<div>Loading..</div>);
    }

    const favoriteProps = {
        isFavorite: isFavorite,
        userId: userId === undefined ? 0 : userId,
        objectNumber: artDetails.objectNumber
    }

    return (
        <Card height="large" width="large" background="light-1" 
            focusIndicator={true}
            hoverIndicator={true}>
            <CardHeader pad="medium">{artDetails.longTitle}</CardHeader>
                <CardBody pad="medium">
                    <DetailsLink to={`/details/${artDetails.objectNumber}`}>
                        <ArtPicture imageUrl={imageUrl}></ArtPicture>
                    </DetailsLink>
                </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">   
                <FavoriteButton props={favoriteProps} />
                <Button icon={<ShareOption color="plain" />} 
                        hoverIndicator
                        //TODO: define share onClick={}
                        />
            </CardFooter>
        </Card>
    )
}


const DetailsLink = styled(Link)`
    width:100%;
    height:100%;
`;

const ArtPicture = styled.div`
    background-image: url(${props=> props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
`;
