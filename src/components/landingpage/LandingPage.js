import React, { useState, useEffect } from 'react';
import { QuizH1, QuizzesContainer, QuizSelector, QuizH2, QuizDetails, NextButtonPage, BackButton } from '../Styles.js';
import styled from 'styled-components';

const LandingPage = () => {
    
    return (
        <BackGroundImg>
        <Layer>
        <ArtOfTheDay>
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
`;

const ArtOfTheDay = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border: 1rem solid black;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg");
    background-size: cover;
    height: 30rem;
    width: 30rem;
    &:hover {
        filter: brightness(30%);
    }
    
`;

export default LandingPage;
