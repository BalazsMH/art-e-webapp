import React from 'react';

const UserLogin = () => {
    let userName, password;
    
    const handleChange = (e, targetVar) => {
        targetVar = e.target.value;
    }

    const handleLoginSubmit = () => {
        console.log("Logged in!");
    }

    return (
        <div>
            <form>
                <label>Username: </label>
                <input onChange={(e) => handleChange(e, userName)} type="text" name="userName" placeholder="Enter your username here" />
                <br />
                <label>Password: </label>
                <input onChange={(e) => handleChange(e, password)} type="password" name="pwd" placeholder="Enter your password here" />
                <br />
                <button onClick={() => handleLoginSubmit}>Login</button>
            </form>
        </div>
    )
}

export default UserLogin;