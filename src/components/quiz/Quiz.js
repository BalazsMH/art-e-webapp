import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Question} from './Question';
import { QuizContainer, QuizzesContainer } from '../Styles.js';
import cookie from 'react-cookies';
import { UserStatsContext } from '../user/UserStatsContext';


const API_URL = 'http://localhost:8080/api/quiz';
const API_URL_UPDATE = `http://localhost:8080/api/user/update-statistics`;

const Quiz = ({type}) => {
    const {userData, isLoaded, refreshUserData} = useContext(UserStatsContext);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState();
    const [allAnswers, setAllAnswers] = useState();
    const [winStreak, setWinStreak] = useState();
    const [gameEnded, setGameEnded] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [dailyRemainingXp, setDailyRemainingXp] = useState();
    const [actualXp, setActualXp] = useState();
    const userName = cookie.load('username');
    
    useEffect(() => {
        if(isLoaded) {
            setCorrectAnswers(userData.correctAnswers);
            setAllAnswers(userData.allAnswers);
            setWinStreak(userData.winStreak);
            setDailyRemainingXp(userData.dailyRemainingXp);
            setActualXp(userData.actualXp);
            console.log(userData)
        }
        
    }, [isLoaded])

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


    useEffect(() => {
        if (gameEnded) {
            let prepUserData = { 
            actualXp: actualXp,
            allAnswers: allAnswers,
            correctAnswers: correctAnswers,
            dailyRemainingXp: dailyRemainingXp,
            winStreak: winStreak
        };
        
        axios({
            method: 'POST',
            url: API_URL_UPDATE,
            headers: {
                'Authorization': cookie.load("Authorization")
            },
            data: {
                stats: prepUserData
                }
        }).then(res => {
            console.log("data saved")
            refreshUserData();
        })
        .catch(e => {
            console.log(e);
        })

        }
    }, [gameEnded])


    const handleAnswer = (answer) => {
        if(!showAnswers) {
            if(answer === questions[currentIndex].correct_answer) {
                setScore(score + 100);
                setCorrectAnswers(correctAnswers + 1);
                setWinStreak(winStreak + 1);
                setAllAnswers(allAnswers + 1);
                }
            else {
                setWinStreak(0);
                setAllAnswers(allAnswers + 1);
            }
            }
        setShowAnswers(true);
    }

    const handleNextQuestion = () => {
        setShowAnswers(false);
        setCurrentIndex(currentIndex + 1);

        if(currentIndex + 1 >= questions.length) {
            const dailyXpSubScore = (dailyRemainingXp - score);
            const actuaXplPlusScore = (actualXp + score);
            (dailyXpSubScore > 0) ? setActualXp(actuaXplPlusScore) : setActualXp(actualXp + dailyRemainingXp);
            (dailyXpSubScore > 0) ? setDailyRemainingXp(dailyXpSubScore) : setDailyRemainingXp(0);

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
