import React from 'react';
import styled from 'styled-components';
import {AnswerButton} from './AnswerButton'


export const Question = ({
    showAnswers,
    handleAnswer,
    handleNextQuestion,
    data: { question, correct_answer, answers, url },
    type
}) => {
    return (
    <div>
    <QuestionContainer>
        <QuestionH2 className="text-2xl" dangerouslySetInnerHTML={{__html: question}}></QuestionH2>
        {type === "detail" ? 
            <ImgContainer>
            <ImgDetail src={url} alt="Dali" width="500" height="600"></ImgDetail>
            </ImgContainer> :
            <Img src={url} alt="Dali" width="500" height="600"></Img>
        } 
    </QuestionContainer>
    <AnswerContainer>
        {answers.map((answer, idx) =>{
        const bgColor = showAnswers ? answer === correct_answer ? '#008000' : '#FF0000' : '#DAD299';
        return (
        <AnswerButton key={idx} bgColor={bgColor} handleAnswer={handleAnswer} answer={answer}/>
        );
    })}
    </AnswerContainer>
        <NextButton disabled={ !showAnswers } onClick={handleNextQuestion}>
            Next
        </NextButton>
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

const ImgDetail = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: initial;
`;

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const ImgContainer = styled.div`
    max-width: 50%;
    overflow: hidden;
`;

const QuestionH2 = styled.h2`
    text-align: center;
    width: 100%;
`;

const AnswerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0.5rem;
`;

const NextButton = styled.button`
    background: #DAD299;
    color: white;
    padding: 10px;
    border-radius: 0.5rem;
    width: 20%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 40%;
    margin-right: auto;
`;