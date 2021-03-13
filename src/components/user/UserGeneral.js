import React, { useState, useEffect } from 'react';
import UserSidebar from '../layout/UserSidebar';
import { UserInformationContainer , BasicDataContainer} from '../Styles.js';

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
        <UserInformationContainer>
            <UserSidebar />
            <BasicDataContainer>
            <p>Username: { userData.userName }</p>
            <p>Registration date: { userData.registrationDate }</p>
            <p>E-mail: { userData.email }</p>
            </BasicDataContainer>

        </UserInformationContainer>
    )
}

export default UserGeneral;