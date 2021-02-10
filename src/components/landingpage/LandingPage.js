import React, { useState, useEffect } from 'react';
import { QuizH1, QuizzesContainer, QuizSelector, QuizH2, QuizDetails, NextButtonPage, BackButton } from '../Styles.js';
import styled from 'styled-components';

const LandingPage = () => {

    
    return (
        <MainDiv>
        <PerspectiveText>
            <PerspectiveLine>
                <Text></Text>
                <Text>Welcome</Text>
            </PerspectiveLine>
            <PerspectiveLine>
                <Text>Welcome</Text>
                <Text>TO</Text>
            </PerspectiveLine>
            <PerspectiveLine>
                <Text>TO</Text>
                <Text>art-e</Text>
            </PerspectiveLine>
            <PerspectiveLine>
                <Text>art-e</Text>
                <Text>Application!</Text>
            </PerspectiveLine>
            <PerspectiveLine>
                <Text>Application!</Text>
                <Text></Text>
            </PerspectiveLine>
        </PerspectiveText>
        </MainDiv>
        )
}

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: 34%;
    margin-bottom: auto;
    margin-top: auto;
    padding: 10rem;
`;

const Text = styled.p`
    margin: 0;
    height: 3.1rem;
    line-height: 3.1rem;
    color: black;
    transition: all 0.5s ease-in-out; 
`

const PerspectiveText = styled.div`
    color: white;
    font-family: Arial;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    &:hover ${Text}{
        transform: translate(0, -3rem);
    }
`

const PerspectiveLine = styled.div`
    height: 3rem;
    overflow: hidden;
    position: relative;
    &:nth-child(odd) {
        transform: skew(60deg, -30deg) scaleY(0.667);
    }
    &:nth-child(even) {
        transform: skew(0deg, -30deg) scaleY(1.337);
    }
    &:nth-child(1) {
        left: 1%;
    }
    &:nth-child(2) {
        left: 8%;
        background: #f07e6e;
    }
    &:nth-child(3) {
        left: 17%;
        background: #84cdfa;
    }
    &:nth-child(4) {
        left: 25.8%;
        background: #5ad1cd;
    }
    &:nth-child(5) {
        left: 34%;
    }
`



export default LandingPage;
