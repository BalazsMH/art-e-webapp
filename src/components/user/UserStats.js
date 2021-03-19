import React, { useContext } from 'react';
import UserSidebar from '../layout/UserSidebar';
import { UserStatsContext } from '../user/UserStatsContext';
import { StatsContainer} from '../Styles.js';
import { UserInformationContainer} from '../Styles.js';
import RankStepper from './RankStepper';

const UserStats = () => {
    const {userData, isLoaded} = useContext(UserStatsContext);

    return (
        isLoaded ? (<UserInformationContainer>
            <UserSidebar />
            <StatsContainer>
                <p>XP earned: { userData.actualXp }</p>
                <p>Daily remaining XP: { userData.dailyRemainingXp }</p>
                <p>Correct answers: { userData.correctAnswers }</p>
                <p>Total answers: { userData.allAnswers }</p>
                <p>Correct answer ratio: { userData.answerRatio }</p>
                <p>Daily streak: { userData.dailyStreak }</p>
                <p>Win streak: { userData.winStreak }</p>
                <RankStepper activeRank={userData.rankId}/>
            </StatsContainer>

            
        </UserInformationContainer>) :

        (<h1>Loading...</h1>)

    )
}

export default UserStats;