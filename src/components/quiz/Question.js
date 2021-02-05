import React from 'react';
import {AnswerButton} from './AnswerButton'
import { QuestionContainer, QuestionH2, ImgContainer, ImgDetail, Img, AnswerContainer, NextButton } from '../Styles.js';

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
