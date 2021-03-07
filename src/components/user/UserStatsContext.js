import React, {useState, useEffect, createContext} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import { useContext } from 'react';

export const UserStatsContext = createContext();

export const UserStatsProvider = (props) => {

    const API_URL = `http://localhost:8080/api/user/statistics`;
    const [userData, setUserData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        refreshUserData();
    }, []);

    const refreshUserData = ()=> {
        axios({
            method: 'POST',
            url: API_URL,
            headers: {
                'Authorization': cookie.load("Authorization")
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
    }
    
    return (
        <UserStatsContext.Provider value={{userData, isLoaded, refreshUserData}}>
            {props.children}
        </UserStatsContext.Provider>
    );
}
