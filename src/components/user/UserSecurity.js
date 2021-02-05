import React from 'react';
import UserSidebar from '../layout/UserSidebar';

const UserSecurity = () => {
    let oldEmail, oldPwd;
    let modEmail, modPwd;
    let modEmailConf, modPwdConf;

    const handleChange = (e, targetVar) => {
        targetVar = e.target.value;
    }

    let newEmail;
    const handleEmailSubmit = () => {
        if (modEmail === modEmailConf) {
            newEmail = modEmail;
            console.log(newEmail);
        }
    }

    let newPwd;
    const handlePasswordSubmit = () => {
        if (modPwd === modPwdConf) {
            newPwd = modPwd;
            console.log(newPwd);
        }
    }

    return (
        <div>
            <UserSidebar />
            <form>
                <label>Actual e-mail: </label>
                <input onChange={(e) => handleChange(e, oldEmail)} type="text" name="OldEmail" placeholder="Enter actual e-mail address here" />
                <br />
                <label>New e-mail: </label>
                <input onChange={(e) => handleChange(e, modEmail)} type="text" name="NewEmail" placeholder="Enter new e-mail address here" />
                <br />
                <label>Confirm new e-mail: </label>
                <input onChange={(e) => handleChange(e, modEmailConf)} type="text" name="NewEmailAgain" placeholder="Confirm new e-mail address" />
                <br />
                <button onClick={() => handleEmailSubmit}>Submit e-mail</button>
            </form>
            <form>
                <label>Actual password: </label>
                <input onChange={(e) => handleChange(e, oldPwd)} type="password" name="OldPwd" placeholder="Enter actual password here" />
                <br />
                <label>New password: </label>
                <input onChange={(e) => handleChange(e, modPwd)} type="password" name="NewPwd" placeholder="Enter new password here" />
                <br />
                <label>Confirm new password: </label>
                <input onChange={(e) => handleChange(e, modPwdConf)} type="password" name="NewPwdAgain" placeholder="Confirm new password" />
                <br />
                <button onClick={() => handlePasswordSubmit}>Submit password</button>
            </form>
        </div>
    )
}

export default UserSecurity;
