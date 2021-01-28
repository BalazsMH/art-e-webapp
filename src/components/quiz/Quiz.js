import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Quiz = () => {

    const dummyApiUrl = 'https://opentdb.com/api.php?amount=5&category=25&difficulty=medium&type=multiple'; 

    useEffect(() => {
        axios({
            method: 'GET',
            url: dummyApiUrl,
        }).then(res => {
            console.log(res.data.results);
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        })
    }, [])
    return (
        <QuizContainer>
            <QuestionContainer>
                <h2 className="text-2xl">Question for the Quiz App</h2>
            </QuestionContainer>
            <AnswerContainer>
                <AnswerButton>A</AnswerButton>
                <AnswerButton>B</AnswerButton>
                <AnswerButton>C</AnswerButton>
                <AnswerButton>D</AnswerButton>
            </AnswerContainer>
        </QuizContainer>
    )
}

const QuizContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const QuestionContainer = styled.div`
    background: #DAD299;
    background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);
    background: linear-gradient(to right, #B0DAB9, #DAD299);
    color: white;
    padding: 15px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: black;
    border-width: 1.5px;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `;

const AnswerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0.5rem;
`;

const AnswerButton = styled.button`
    background: #DAD299;
    background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);
    background: linear-gradient(to right, #B0DAB9, #DAD299);
    color: white;
    padding: 10px;
    border-radius: 0.5rem;
    width: 90%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
`;





export default Quiz;