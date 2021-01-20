import React from 'react';
import styled from 'styled-components';
import logo from '../../images/arte.png';

const Navbar = () => {
    return (
        <NavContainer>
            <a href="/"><SiteLogo src={logo} alt="Art-E" /></a>
            <NavRoutes>
                <NavLink href="/browse">Browse</NavLink>
                <NavLink href="/quiz">Quiz</NavLink>
                <NavLink href="/about">About</NavLink>
                <UserFunctionsContainer>
                    <NavLink href="/register-user">Registration</NavLink>
                    <NavLink href="/login">Login</NavLink>
                </UserFunctionsContainer>
            </NavRoutes>
        </NavContainer>
    );
}

const NavContainer = styled.header`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
    background-color: #231F20;
    color: #ffffff;
    padding:0.2rem;
`;

const NavRoutes = styled.div`
    display:flex;
    width: 100%;
`;

const UserFunctionsContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

const NavLink = styled.a`
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
    color:inherit;
    &:hover{
        text-decoration: underline;
    }

`;



const SiteLogo = styled.img`
    max-width: 6rem;
    margin-right: 1.5rem;
`;

export default Navbar;