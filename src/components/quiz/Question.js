import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

const DUMMY_IMAGE_URL = 'https://blog.studentlifenetwork.com/wp-content/uploads/2018/04/AppLogo-Quizlet-670x670.png'

export const Question = ({
    data: { question, correct_answer, incorrect_answers },
}) => (
    <div>
    <QuestionContainer>
        <h2 className="text-2xl">{question}</h2>
        <img src={DUMMY_IMAGE_URL} alt="Dali" width="500" height="600"></img>
    </QuestionContainer>
    <AnswerContainer>
        <AnswerButton>{correct_answer}</AnswerButton>
        <AnswerButton>{incorrect_answers[0]}</AnswerButton>
        <AnswerButton>{incorrect_answers[1]}</AnswerButton>
        <AnswerButton>{incorrect_answers[2]}</AnswerButton>
    </AnswerContainer>
    </div>
)

const QuestionContainer = styled.div`
    background: #DAD299;
    background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);
    background: linear-gradient(to right, #B0DAB9, #DAD299);
    color: white;
    padding: 15px;
    border-radius: 0.5rem;
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
