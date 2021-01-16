import React, { useState, useEffect } from 'react';
import UserSidebar from '../layout/UserSidebar';

const UserGeneral = () => {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        // Dummy data now, axios call later from backend
        setUserData({ 
            userName: "Laszlo.Vajay",
            registrationDate: "2021.01.16",
            email: "vajaylm@gmail.com"
        });
    }, []);

    return (
        <div>
            <UserSidebar />
            <p>Username: { userData.userName }</p>
            <p>Registration date: { userData.registrationDate }</p>
            <p>Username: { userData.email }</p>
        </div>
    )
}

export default UserGeneral;