import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarContainer} from '../Styles.js';

const UserSidebar = () => {
    return (
        <SidebarContainer>
            <Link to="/user/statistics">Scores</Link>
            <Link to="/user/general">General</Link>
            <Link to="/user/security">Security</Link>
        </SidebarContainer>
    )
}

export default UserSidebar;