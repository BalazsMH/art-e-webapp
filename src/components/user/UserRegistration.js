import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { RegistrationContainer } from '../Styles.js';
import axios from 'axios';


const UserRegistration = () => {
    const [birthDate, setBirthDate] = useState(new Date());
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleChange = (e, targetVar) => {
        targetVar = e.target.value;
    }

    const handleRegistrationSubmit = (e) => {
        // e.preventDefault();
        console.log(userName, password, firstName, lastName, email);
        sendNewUserData();
        console.log("Sent new user request");
    }
    const sendNewUserData = () => {
        axios({
            method: 'POST',
            url:'http://localhost:8080/api/register',
            params: {userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    birthDate: birthDate
                }
        }).then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <RegistrationContainer>
            <form>
                <label>Username: </label>
                <input onChange={(e) => setUsername(e.target.value)} value={userName} type="text" name="userName" placeholder="Enter your username here" />
                <br />
                <label>Password: </label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="pwd" placeholder="Enter your password here" />
                <br />
                <label>First name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="firstName" placeholder="Enter your first name here" />
                <br />
                <label>Last name: </label>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="lastName" placeholder="Enter your last name here" />
                <br />
                <label>Date of birth: </label>
                <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
                <br />
                <label>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" placeholder="Enter your email here" />
                <br />
                <button type="button" onClick={(e) => handleRegistrationSubmit()}>Register</button>
            </form>
        </RegistrationContainer>
    )
}

export default UserRegistration;
