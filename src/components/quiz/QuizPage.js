import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Quiz from './Quiz'


const QuizPage = () => {

    const [showGivenQuiz, setShowGivenQuiz] = useState('');

    const showQuiz = (type) => {
        setShowGivenQuiz(type)
        }
    
    return (
            <Container>
                {showGivenQuiz === '' && ( <QuizH1>Welcome to the Art-e Quizzes!</QuizH1>)}
                {showGivenQuiz === '' && (
                <QuizzesContainer>
                    <QuizSelector>
                        <QuizH2>Quiz 1</QuizH2>
                        <QuizDetails>Your objective is to guess the title of the given picture.</QuizDetails>
                        <NextButton onClick={() => showQuiz('title')}>Let's go!</NextButton>
                    </QuizSelector>
                    <QuizSelector>
                        <QuizH2>Quiz 2</QuizH2>
                        <QuizDetails>Your objective is to guess the maker of the given picture.</QuizDetails>
                        <NextButton onClick={() => showQuiz('maker')}>Let's go!</NextButton>
                    </QuizSelector>
                    <QuizSelector>
                        <QuizH2>Quiz 3</QuizH2>
                        <QuizDetails>Your objective is to guess the title based on the detail of the picture.</QuizDetails>
                        <NextButton onClick={() => showQuiz('detail')}>Let's go!</NextButton>
                    </QuizSelector>
                </QuizzesContainer>)}
                {showGivenQuiz === 'title' && (
                <Quiz type={{showGivenQuiz}}/>)}
                {showGivenQuiz === 'maker' && (
                <Quiz type={{showGivenQuiz}}/>)}
                {showGivenQuiz === 'detail' && (
                <Quiz type={{showGivenQuiz}}/>)}
                {showGivenQuiz !== '' && (  <BackButton onClick={() => showQuiz('')}>Back</BackButton>)}
            </Container>
        )
}

const Container = styled.div`
`;

const QuizH1 = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
    width: 100%;
`;

const QuizzesContainer = styled.div`
    display: flex;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between !important;
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
    margin-left: 3%;
    margin-right: 3%;
    padding: 10px;
    width: 70%;
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

const BackButton = styled.button`
    position: relative;
    background: #ffffff;
    color: black;
    border: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #000000;
    width: 10%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 45%;
    margin-right: auto;
    margin-top: 2rem;
    &:hover {
        background: #000000;
        color: white;
        }
`;

export default QuizPage;