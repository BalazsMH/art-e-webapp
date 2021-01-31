import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Box, Text, Card, Image, CardFooter, CardBody} from 'grommet';
import styled from 'styled-components';


export default function ArtDetails() {
    let {objectNumber} = useParams();
    const [pictureData, setPictureData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios({
            method: 'GET',
            url:`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=Gz1ZRsyI&format=json`
            // url:'http://localhost:8080/api/getArtData',
            // params: {culture: "en",
            //         "object-number": id
            //         }
        }).then(res => {
            console.log(res);
            setPictureData(res.data.artObject);
            setIsLoading(false);
        })
        .catch(e => {
            console.log(e);
        })

    }, [])

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
                <Text size="xlarge" weight="bold">{pictureData.title}</Text>
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

const InfoBox = styled(Box)`
    max-width: 40vw;
`;

const AboutContainer = styled(Box)`
    margin-top: 1rem;
`;

const DetailsContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin: 1rem;
`;

const AboutText = styled(Text)`
    hyphens: auto;
    text-align: justify;
`;
