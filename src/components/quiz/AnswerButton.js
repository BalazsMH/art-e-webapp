import React from 'react';
import { AnsButton } from '../Styles.js';

export const AnswerButton = ({ bgColor, handleAnswer, answer }) => (
    <div>
        <AnsButton style={{backgroundColor: bgColor}} onClick={() => handleAnswer(answer)}
        dangerouslySetInnerHTML={{__html: answer}}></AnsButton>
    </div>
)
