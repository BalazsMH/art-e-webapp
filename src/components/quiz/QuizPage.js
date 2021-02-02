import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const QuizPage = () => {
    
    return (
            <div>
                <QuizH1>Welcome to the Art-e Quizzes!</QuizH1>
                <QuizzesContainer>
                    <QuizSelector>
                        <QuizH2>Quiz 1</QuizH2>
                        <QuizDetails>Your objective is to guess the title of the given picture. </QuizDetails>
                        <NextButton>Let's go!</NextButton>
                    </QuizSelector>
                    <QuizSelector>
                        <QuizH2>Quiz 2</QuizH2>
                        <QuizDetails>Your objective is to guess the maker of the given picture. </QuizDetails>
                        <NextButton>Let's go!</NextButton>
                    </QuizSelector>
                    <QuizSelector>
                        <QuizH2>Quiz 3</QuizH2>
                        <QuizDetails>Your objective is to guess the title based on the detail of the picture. </QuizDetails>
                        <NextButton>Let's go!</NextButton>
                    </QuizSelector>
                </QuizzesContainer>
            </div>
        )
}

const QuizH1 = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
    width: 100%;
    margin-top: 10%;
    top: 50%;
    left: 50%;
    padding: 5rem;
`;

const QuizzesContainer = styled.div`
    position: absolute;
    margin-top: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0.5rem;
`;

const QuizH2 = styled.h2`
    text-align: center;
    font-weight: 600;
    width: 100%;
`;

const QuizSelector = styled.div`
    border: 2px;
    border-style: solid;
    border-color: #000000;
    border-radius: 20px;
    margin-left: 3px;
    margin-right: 3px;
    padding: 10px;
    &:hover {
        -moz-box-shadow: 0 0 20px #999;
        -webkit-box-shadow: 0 0 20px #999;
        box-shadow: 0 0 20px #999;
        }
`;

const QuizDetails = styled.div`
    text-align: center;
    font-weight: 400;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
`;

const NextButton = styled.button`
    background: #ffffff;
    color: black;
    border: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #000000;
    width: 50%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 25%;
    margin-right: auto;
    margin-top: 2rem;
    &:hover {
        background: #000000;
        color: white;
        }
`;

export default QuizPage;