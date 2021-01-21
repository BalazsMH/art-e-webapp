import React, { useState, useEffect } from 'react';

const Scoreboard = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        // Dummy data now, axios call later from backend
        setUsers([{ 
                userName: "Balazs.Horvath",
                actualXp: 200
            },
            {
                userName: "Daniel.Mery",
                actualXp: 150
            },
            {
                userName: "Laszlo.Vajay",
                actualXp: 100
            }
        ]);
    }, []);

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
                            <td>{ user.actualXp }</td>
                        </tr>)
                })}
            </table>
        </div>
    )
}

export default Scoreboard;