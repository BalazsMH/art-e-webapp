import React from 'react'
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <div>
            <Link to="/user/game">Scores</Link>
            <Link to="/user/general">General</Link>
            <Link to="/user/security">Security</Link>
        </div>
    )
}

export default UserSidebar;