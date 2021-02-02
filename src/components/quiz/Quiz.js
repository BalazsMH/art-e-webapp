import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Question} from './Question';


const API_URL = 'http://localhost:8080/api/quiz'; 

const Quiz = ({number}) => {
    
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    
    useEffect(() => {
        axios({
            method: 'POST',
            url: API_URL,
        }).then(res => {
            console.log(res.data.results)
            const questions = res.data.results.map((question) => ({
                ...question,
                answers: [
                    question.correct_answer,
                    ...question.incorrect_answers
                ].sort(),
                ...question.url,
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
    position: relative !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    display: block;
    margin-left: auto;
    margin-right: 60%;
    width: 40%;
`;

export default Quiz;