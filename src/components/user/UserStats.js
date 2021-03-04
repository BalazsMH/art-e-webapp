import React, { useContext } from 'react';
import UserSidebar from '../layout/UserSidebar';
import { UserStatsContext } from '../user/UserStatsContext';

const UserStats = () => {
    const {userData, isLoaded} = useContext(UserStatsContext);

    return (
        isLoaded ? (<div>
            <UserSidebar />
            <p>Highscores rank: { userData.rank }</p>
            <p>XP earned: { userData.actualXp }</p>
            <p>Daily remaining XP: { userData.dailyRemainingXp }</p>
            <p>Correct answers: { userData.correctAnswers }</p>
            <p>Total answers: { userData.allAnswers }</p>
            <p>Correct answer ratio: { userData.answerRatio }</p>
            <p>Daily streak: { userData.dailyStreak }</p>
            <p>Win streak: { userData.winStreak }</p>
            
        </div>) :

        (<h1>Loading...</h1>)

    )
}

export default UserStats;