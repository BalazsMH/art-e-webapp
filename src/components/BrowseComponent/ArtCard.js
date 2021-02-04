import React from 'react';
import styled from 'styled-components';
import {Card, CardHeader, CardBody, CardFooter, Button, Image} from 'grommet';
import {Favorite, ShareOption} from 'grommet-icons';
import { Link } from 'react-router-dom';

export default function ArtCard(props) {
    const artDetails = props.data;
    const imageUrl = props.data.headerImage.url;
           

    return (
        <Card height="large" width="large" background="light-1" 
              focusIndicator={true}
              hoverIndicator={true}>
            <CardHeader pad="medium">{artDetails.longTitle}</CardHeader>
                <CardBody pad="medium">
                    <DetailsLink to={`/details/${artDetails.objectNumber}`}>
                        <ArtPicture imageUrl={imageUrl}></ArtPicture>
                        {/* <ArtPicture src={imageUrl} alt={artDetails.title}/> */}
                    </DetailsLink>
                </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">   
                <Button icon={<Favorite color="red" />}
                        hoverIndicator
                        //TODO: define favorite onClick={}

                        />
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