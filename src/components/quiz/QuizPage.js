import React, { useState, useContext } from 'react';
import Quiz from './Quiz'
import { QuizH1, QuizzesContainer, QuizSelector, QuizH2, QuizDetails, NextButtonPage, BackButton } from '../Styles.js';
import { UserInfoContext } from '../user/UserInfoContext';
import UserStats from '../user/UserStats';
import cookie from 'react-cookies';


const QuizPage = () => {
    const userInfo = useContext(UserInfoContext);
    const [showGivenQuiz, setShowGivenQuiz] = useState('');

    const showQuiz = (type) => {
        setShowGivenQuiz(type)
        }
    
    return (
            <div>
                {showGivenQuiz === '' && ( <QuizH1>Welcome to the Art-e Quizzes!</QuizH1>)}
                {showGivenQuiz === '' && (
                <QuizzesContainer>
                    <QuizSelector>
                        <QuizH2>Quiz 1</QuizH2>
                        <QuizDetails>Your objective is to guess the title of the given picture.</QuizDetails>
                        <NextButtonPage onClick={() => showQuiz('title')}>Let's go!</NextButtonPage>
                    </QuizSelector>
                    <QuizSelector>
                        <QuizH2>Quiz 2</QuizH2>
                        <QuizDetails>Your objective is to guess the maker of the given picture.</QuizDetails>
                        <NextButtonPage onClick={() => showQuiz('maker')}>Let's go!</NextButtonPage>
                    </QuizSelector>
                    <QuizSelector>
                        <QuizH2>Quiz 3</QuizH2>
                        <QuizDetails>Your objective is to guess the title based on the detail of the picture.</QuizDetails>
                        <NextButtonPage onClick={() => showQuiz('detail')}>Let's go!</NextButtonPage>
                    </QuizSelector>
                </QuizzesContainer>)}
                {showGivenQuiz === 'title' && (
                <Quiz type={{showGivenQuiz}}/>)}
                {showGivenQuiz === 'maker' && (
                <Quiz type={{showGivenQuiz}}/>)}
                {showGivenQuiz === 'detail' && (
                <Quiz type={{showGivenQuiz}}/>)}
                {showGivenQuiz !== '' && (  <BackButton onClick={() => showQuiz('')}>Back</BackButton>)}
                <UserStats></UserStats>
                {console.log(cookie.load("stats"))}
            </div>
        )
}

export default QuizPage;
