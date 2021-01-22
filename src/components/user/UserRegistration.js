import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const UserRegistration = () => {
    const [birthDate, setBirthDate] = useState(new Date());

    let userName, password, firstName, lastName;
    
    const handleChange = (e, targetVar) => {
        targetVar = e.target.value;
    }

    const handleRegistrationSubmit = () => {
        console.log("Registered!");
    }

    return (
        <RegistrationContainer>
            <form>
                <label>Username: </label>
                <input onChange={(e) => handleChange(e, userName)} type="text" name="userName" placeholder="Enter your username here" />
                <br />
                <label>Password: </label>
                <input onChange={(e) => handleChange(e, password)} type="password" name="pwd" placeholder="Enter your password here" />
                <br />
                <label>First name: </label>
                <input onChange={(e) => handleChange(e, firstName)} type="text" name="firstName" placeholder="Enter your first name here" />
                <br />
                <label>Last name: </label>
                <input onChange={(e) => handleChange(e, lastName)} type="text" name="lastName" placeholder="Enter your last name here" />
                <br />
                <label>Date of birth: </label>
                <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
                <br />
                <button onClick={() => handleRegistrationSubmit}>Register</button>
            </form>
        </RegistrationContainer>
    )
}


const RegistrationContainer = styled.div`
    display: flex;
    padding: 5rem;
    line-height: 3rem;

`;

export default UserRegistration;