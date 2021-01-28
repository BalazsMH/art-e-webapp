import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import {AnswerButton} from './AnswerButton'

const DUMMY_IMAGE_URL = 'https://blog.studentlifenetwork.com/wp-content/uploads/2018/04/AppLogo-Quizlet-670x670.png'

export const Question = ({
    handleAnswer,
    data: { question, correct_answer, incorrect_answers },
}) => {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    return (
    <div>
    <QuestionContainer>
        <h2 className="text-2xl">{question}</h2>
        <img src={DUMMY_IMAGE_URL} alt="Dali" width="500" height="600"></img>
    </QuestionContainer>
    <AnswerContainer>
        {shuffledAnswers.map(answer => 
            <AnswerButton handleAnswer={handleAnswer} answer={answer}/>
        )}
    </AnswerContainer>
    </div>
    )}

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