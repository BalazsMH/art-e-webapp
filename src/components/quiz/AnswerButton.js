import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';


export const AnswerButton = ({ handleAnswer, answer }) => (
    <div>
        <Button onClick={() => handleAnswer(answer)}>{answer}</Button>
    </div>
)

const Button = styled.button`
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
