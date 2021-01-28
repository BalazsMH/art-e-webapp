import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DUMMY_API_URL = 'https://opentdb.com/api.php?amount=5&category=25&difficulty=medium&type=multiple'; 
const DUMMY_IMAGE_URL = 'https://blog.studentlifenetwork.com/wp-content/uploads/2018/04/AppLogo-Quizlet-670x670.png'

const Quiz = () => {
    
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: DUMMY_API_URL,
        }).then(res => {
            console.log(res.data.results);
            setQuestions(res.data.results)
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        })
    }, [])
    return (
        questions.length > 0 ? (
        <QuizContainer>            
            <QuestionContainer>
                <h2 className="text-2xl">{questions[1].question}</h2>
                <img src={DUMMY_IMAGE_URL} alt="Dali" width="500" height="600"></img>
            </QuestionContainer>
            <AnswerContainer>
                <AnswerButton>{questions[1].correct_answer}</AnswerButton>
                <AnswerButton>{questions[1].incorrect_answers[0]}</AnswerButton>
                <AnswerButton>{questions[1].incorrect_answers[1]}</AnswerButton>
                <AnswerButton>{questions[1].incorrect_answers[2]}</AnswerButton>
            </AnswerContainer>
        </QuizContainer>
        ) : <h1>Loading...</h1>
        )
}

const QuizContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const QuestionContainer = styled.div`
    background: #DAD299;
    background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);
    background: linear-gradient(to right, #B0DAB9, #DAD299);
    color: white;
    padding: 15px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: black;
    border-width: 1.5px;
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





export default Quiz;