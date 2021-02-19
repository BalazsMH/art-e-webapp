import React from 'react';
import styled from 'styled-components';

const LandingPage = () => {
    
    return (
        <BackGroundImg>
        <Layer>
        <ArtOfTheDay>
            <ArtImg src="https://upload.wikimedia.org/wikipedia/commons/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg" />
            <TextConatainer>
            <ImgText>ART OF THE DAY<br></br>Maker:<br></br>Johannes Vermeer<br></br>Title:<br></br>The Milkmaid</ImgText>
            </TextConatainer>
        </ArtOfTheDay>
        </Layer>
        </BackGroundImg>
        )
}

const BackGroundImg = styled.div`
    position: relative;
    background-image: url("https://img.theculturetrip.com/wp-content/uploads/2016/08/anton_mauve_-_morgenrit_langs_het_strand.jpg");
    background-size: cover;
    background-position: bottom;
`;

const Layer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5));
    display: flex;
    justify-content: center;

`;

const ArtImg = styled.img`
    width: 100%;
    border: 1rem solid black;
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
`;

const TextConatainer = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

const ImgText = styled.p`
    background-color: black;
    color: white;
    font-size: 1.3rem;
    padding: 1.3rem 2.6rem;
    

`;

const ArtOfTheDay = styled.div`
    position: absolute;
    top: 26%;
    height: 30rem;
    width: 30rem;
    &:hover ${ArtImg}{
        opacity: 0.8;
    }
    &:hover ${TextConatainer}{
        opacity: 1;
    }
`;


export default LandingPage;
