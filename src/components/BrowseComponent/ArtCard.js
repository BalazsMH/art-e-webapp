import React from 'react';
import styled from 'styled-components';
import {Card, CardHeader, CardBody, CardFooter, Button} from 'grommet';
import {Favorite, ShareOption} from 'grommet-icons';

export default function ArtCard(props) {
    const artDetails = props.data;
    const imageUrl = props.data.headerImage.url;
    


    return (
        <Card height="medium" width="medium" background="light-1">
            <CardHeader pad="medium">{artDetails.longTitle}</CardHeader>
            <CardBody pad="medium"><ArtPicture src={imageUrl} alt={artDetails.title}/></CardBody>
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

const ArtPicture = styled.img`
    object-fit: cover;
    height: 100%;

`;
