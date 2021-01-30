import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';


export const AnswerButton = ({ bgColor, handleAnswer, answer }) => (
    <div>
        <Button style={{backgroundColor: bgColor}} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}></Button>
    </div>
)

const Button = styled.button`
    color: white;
    padding: 10px;
    border-radius: 0.5rem;
    width: 90%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 5%;
    margin-right: auto;
`;
