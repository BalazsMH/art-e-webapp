import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Box, Text, Card, Image, CardBody} from 'grommet';
import { DetailsContainer, AboutContainer, AboutText } from '../Styles.js';

export default function ArtDetails() {
    let {objectNumber} = useParams();
    const [pictureData, setPictureData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://localhost:8080/api/getArtDetails',
            params: {
                    "objectNumber": objectNumber
                    }
        }).then(res => {
            setPictureData(res.data.artObject);
            setIsLoading(false);
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        })
    }, [objectNumber])


    if (isLoading) {
        return <div>Please wait</div>
    }
    return (
        <DetailsContainer>
            <Card>
                <CardBody gridArea="picture" height="large" width="large" direction="column">
                    <CardBody pad="small">
                        <Image fill={true} fit="contain" alt={pictureData.title} src={pictureData.webImage.url}></Image>
                    </CardBody>
                </CardBody>
            </Card>
            <Box pad="medium">
                <Text size="large" weight="bold">{pictureData.title}</Text>
                <Text size="medium">by</Text>
                <Text size="large">{pictureData.principalOrFirstMaker}, {pictureData.dating.presentingDate}</Text>
                <AboutContainer>
                    <AboutText size="medium">About the artwork</AboutText>
                    <Text size="small" wordBreak="break-word">{pictureData.plaqueDescriptionEnglish}</Text>
                </AboutContainer>
            </Box>
        </DetailsContainer>
    )
}
