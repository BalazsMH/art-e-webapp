import React, { useState, useEffect } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Button} from 'grommet';
import {ShareOption} from 'grommet-icons';
import axios from 'axios';
import FavoriteButton from '../favorites/FavoriteButton';
import { DetailsLink, ArtPicture } from '../Styles.js';


export default function ArtCard(props) {
    let userName = props.userName;
    const artDetails = props.data;
    const imageUrl = props.data.headerImage.url;
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url:`http://localhost:8080/api/favorites/isFavorite/${userName}/${artDetails.objectNumber}`
        })
        .then(res => {
            setIsFavorite(res.data);
            setIsLoading(false);
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        });
    }, [artDetails.objectNumber, userName]);

    if (isLoading) {
        return (<div>Loading..</div>);
    }

    const favoriteProps = {
        isFavorite: isFavorite,
        userNameProp: userName,
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
