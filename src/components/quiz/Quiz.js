import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Quiz = () => {

    const dummyApiUrl = 'https://opentdb.com/api.php?amount=5&category=25&difficulty=medium&type=multiple'; 

    useEffect(() => {
        axios({
            method: 'GET',
            url: dummyApiUrl,
        }).then(res => {
            console.log(res.data.results);
            console.log("Load complete..");
        })
        .catch(e => {
            console.log(e);
        })
    }, [])
    return (
        <div>
            <h1>Quiz App</h1>
        </div>
    )
}

export default Quiz;