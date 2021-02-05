import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/arte.png';
import { NavContainer, SiteLogo, NavRoutes, NavLink, UserFunctionsContainer } from '../Styles.js';

const Navbar = () => {
    return (
        <NavContainer>
            <Link to="/"><SiteLogo src={logo} alt="Art-E" /></Link>
            <NavRoutes>
                <NavLink to="/browse">Browse</NavLink>
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/favorites/0">Favorites</NavLink>
                <UserFunctionsContainer>
                    <NavLink to="/register-user">Registration</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </UserFunctionsContainer>
            </NavRoutes>
        </NavContainer>
    );
}

export default Navbar;
