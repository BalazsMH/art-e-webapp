import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Question} from './Question';


const DUMMY_API_URL = 'https://opentdb.com/api.php?amount=5&category=25&difficulty=medium&type=multiple'; 

const Quiz = () => {
    
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false)
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: DUMMY_API_URL,
        }).then(res => {
            setQuestions(res.data.results)
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

    const handleAnswer = (answer) => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        if(answer === questions[currentIndex].correct_answer) {
            setScore(score + 100)
        }

        if(newIndex >= questions.length) {
            setGameEnded(true);
        }
    }

    return (
        gameEnded ? (<h1>Your score: {score}</h1>) : questions.length > 0 ? (
        <QuizContainer>            
            <Question data={questions[currentIndex]} handleAnswer={handleAnswer} />
        </QuizContainer>
        ) : (<h1>Loading...</h1>)
        )
}

const QuizContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default Quiz;