import React, {useState, useEffect, createContext} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

export const UserStatsContext = createContext();

export const UserStatsProvider = (props) => {

    const userName = cookie.load('username');
    const API_URL = `http://localhost:8080/api/user/${userName}/statistics`;
    const [userData, setUserData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

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
            setIsLoaded(true);
        })
        .catch(e => {
            console.log(e);
        })
    }, []);
    
    return (
        <UserStatsContext.Provider value={{userData, isLoaded}}>
            {props.children}
        </UserStatsContext.Provider>
    );
}
