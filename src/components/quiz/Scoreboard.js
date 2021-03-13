import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = `http://localhost:8080/api/user/scoreboard`;

const Scoreboard = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: API_URL,
        }).then(res => {
            setUsers(res.data.data)
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>User name</th>
                    <th>XP</th>
                </tr>
                {users.map((user, key) => {
                    return (
                        <tr>
                            <td>{ key + 1 }.</td>
                            <td>{ user.userName }</td>
                            <td>{ user.userXp }</td>
                        </tr>)
                })}
            </table>
        </div>
    )
}

export default Scoreboard;