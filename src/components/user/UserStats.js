import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserSidebar from '../layout/UserSidebar';

const UserStats = () => {
    let { userName } = useParams();
    const API_URL = `http://localhost:8080/api/user/${userName}/statistics`;
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        axios({
            method: 'POST',
            url: API_URL,
            data: {
                userName: userName
                }
        }).then(res => {
            let prepUserData = { 
                rank: res.data.rank.name,
                actualXp: res.data.actualXp,
                allAnswers: res.data.allAnswers,
                correctAnswers: res.data.correctAnswers,
                dailyRemainingXp: res.data.dailyRemainingXp,
                dailyStreak: res.data.dailyStreak,
                winStreak: res.data.winStreak
            };
            prepUserData.answerRatio = prepUserData.allAnswers !== 0 ? (prepUserData.correctAnswers) / (prepUserData.allAnswers) : 0
            setUserData(prepUserData);
        })
        .catch(e => {
            console.log(e);
        })
    }, []);

    return (
        <div>
            <UserSidebar />
            <p>Highscores rank: { userData.rank }</p>
            <p>XP earned: { userData.actualXp }</p>
            <p>Daily remaining XP: { userData.dailyRemainingXp }</p>
            <p>Correct answers: { userData.correctAnswers }</p>
            <p>Total answers: { userData.allAnswers }</p>
            <p>Correct answer ratio: { userData.answerRatio }</p>
            <p>Daily streak: { userData.dailyStreak }</p>
            <p>Win streak: { userData.winStreak }</p>
            
        </div>
    )
}

export default UserStats;