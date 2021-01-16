import React, { useState, useEffect } from 'react';
import UserSidebar from '../layout/UserSidebar';

const UserStats = () => {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        // Dummy data now, axios call later from backend
        let prepUserData = { 
            rank: "1",
            actualXp: "100",
            quizFinished: "1",
            goodAnswerCount: "4",
            totalAnswerCount: "5"
        };
        prepUserData.answerRatio = (parseInt(prepUserData.goodAnswerCount) / parseInt(prepUserData.totalAnswerCount)).toFixed(2)
        
        setUserData(prepUserData);
    }, []);

    return (
        <div>
            <UserSidebar />
            <p>Highscores rank: { userData.rank }</p>
            
            <p>XP earned: { userData.actualXp }</p>
            <p>Finished quiz count: { userData.quizFinished }</p>
            <p>Correct answers: { userData.goodAnswerCount }</p>
            <p>Total answers: { userData.totalAnswerCount }</p>
            <p>Correct answer ratio: { userData.answerRatio }</p>
            
        </div>
    )
}

export default UserStats;