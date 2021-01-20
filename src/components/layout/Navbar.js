import React from 'react';
import styled from 'styled-components';
import logo from '../../images/Site-logo.png';

const Navbar = () => {
    return (
        <NavContainer>
            <img src={logo} alt="Site Logo" /><br/>
            <div>
                <a href="/browse">Browse</a>
                <a href="/quiz">Quiz</a>
                <a href="/register-user">Registration</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </div>
        </NavContainer>
    );
}

const NavContainer = styled.header`
    display: flex;  
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
`;

export default Navbar;