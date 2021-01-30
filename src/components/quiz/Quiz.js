import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Question} from './Question';


const DUMMY_API_URL = 'https://opentdb.com/api.php?amount=5&category=25&difficulty=medium&type=multiple'; 

const Quiz = () => {
    
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: DUMMY_API_URL,
        }).then(res => {
            const questions = res.data.results.map((question) => ({
                ...question,
                answers: [
                    question.correct_answer,
                    ...question.incorrect_answers
                ].sort(),
            }));
            setQuestions(questions)
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

    const handleAnswer = (answer) => {
        if(!showAnswers) {
            if(answer === questions[currentIndex].correct_answer) {
                setScore(score + 100)
                }
            }
        setShowAnswers(true);
    }

    const handleNextQuestion = () => {
        setShowAnswers(false);
        setCurrentIndex(currentIndex + 1);

        if(currentIndex + 1 >= questions.length) {
            setGameEnded(true);
        }
    }

    return (
        gameEnded ? (<h1>Your score: {score}</h1>) : questions.length > 0 ? (
        <QuizContainer>            
            <Question data={questions[currentIndex]}
                        showAnswers={showAnswers}
                        handleAnswer={handleAnswer}
                        handleNextQuestion={handleNextQuestion} />
        </QuizContainer>
        
        ) : (<h1>Loading...</h1>)
        )
}

const QuizContainer = styled.div`
    position: absolute;
    margin-top: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default Quiz;