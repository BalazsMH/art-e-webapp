import React from 'react';
import styled from 'styled-components';
import logo from '../../images/arte.png';

const Navbar = () => {
    return (
        <NavContainer>
            <a href="/"><SiteLogo src={logo} alt="Art-E" /></a>
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
    background-color: #231F20;
`;

const SiteLogo = styled.img`
    max-width: 150px;
`;

export default Navbar;