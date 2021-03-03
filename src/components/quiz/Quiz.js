import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Question} from './Question';
import { QuizContainer } from '../Styles.js';
import cookie from 'react-cookies';

const API_URL = 'http://localhost:8080/api/quiz';

const Quiz = ({type}) => {
    const userStats = cookie.load("stats");
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(userStats.correctAnswers);
    const [allAnswers, setAllAnswers] = useState(userStats.allAnswers);
    const [winStreak, setWinStreak] = useState(userStats.winStreak);
    const [gameEnded, setGameEnded] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    let dailyRemainingXp = userStats.dailyRemainingXp;
    let actualXp = userStats.actualXp;
    
    useEffect(() => {
        axios({
            method: 'POST',
            url: API_URL,
            data: {
                quizType: type.showGivenQuiz
                }
        }).then(res => {
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
    }, [type.showGivenQuiz])

    const handleAnswer = (answer) => {
        if(!showAnswers) {
            if(answer === questions[currentIndex].correct_answer) {
                setScore(score + 100);
                setCorrectAnswers(correctAnswers + 1);
                setWinStreak(winStreak + 1);
                }
            else {
                setWinStreak(0);
            }
            }
        setAllAnswers(allAnswers + 1);
        setShowAnswers(true);
    }

    const handleNextQuestion = () => {
        setShowAnswers(false);
        setCurrentIndex(currentIndex + 1);
        
        if(currentIndex + 1 >= questions.length) {
            const dailyXpSubScore = (dailyRemainingXp - score);
            const actuaXplPlusScore = (actualXp + score);
            (dailyXpSubScore > 0) ? actualXp = actuaXplPlusScore : actualXp = dailyRemainingXp;
            (dailyXpSubScore > 0) ? dailyRemainingXp = dailyXpSubScore : dailyRemainingXp = 0;

            setGameEnded(true);
        }
    }

    return (
        gameEnded ? (<h1>Your score: {score}</h1>) : questions.length > 0 ? (
        <QuizContainer>            
            <Question data={questions[currentIndex]}
                        showAnswers={showAnswers}
                        handleAnswer={handleAnswer}
                        handleNextQuestion={handleNextQuestion}
                        type={type.showGivenQuiz}
                        />
        </QuizContainer>
        
        ) : (<h1>Loading...</h1>)
        )
}

export default Quiz;
