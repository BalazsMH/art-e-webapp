import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/arte.png';
import {Avatar, Box} from 'grommet';
import {User, UserExpert, Menu} from 'grommet-icons';
import { NavContainer, SiteLogo, NavRoutes, NavLink, UserFunctionsContainer, MobileNav, UserDropButton, MenuDropButton, DropButtonContent } from '../Styles.js';
import { UserInfoContext } from '../user/UserInfoContext';
import { MediaInfoContext } from '../mediaInfo/MediaInfoContext';

const Navbar = () => {
    const {isLoggedIn} = useContext(UserInfoContext);    
    const {isSmallScreen} = useContext(MediaInfoContext);

    return (
        <>
        {isSmallScreen ?
        <MobileNav>
            <UserDropButton
                    color="plain"
                    label={
                    <>
                        <Box direction="row"  gap="small">
                            {isLoggedIn ? <Avatar background="dark-4"><UserExpert color="light-1" /></Avatar>
                                        : <Avatar background="dark-4"><User color="light-1" /></Avatar>}
                        </Box>
                    </>
                        }
                    dropAlign={{ top: 'bottom', right: 'right' }}
                    dropContent={
                        <>
                        {isLoggedIn ?
                        <>
                            <NavLink to="/user">My Account</NavLink>
                            <NavLink to="/logout">Logout</NavLink>
                        </> : 
                        <>
                            <NavLink to="/register-user">Registration</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                        }
                        </>    
                    }
                    />
            <Link to="/"><SiteLogo src={logo} alt="Art-E" /></Link>
            <MenuDropButton
            label={
                <Menu/>
                }
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
                <DropButtonContent>
                <NavLink to="/browse">Browse</NavLink>
                {isLoggedIn ? 
                    <>
                        <NavLink to="/quiz">Quiz</NavLink>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </>
                        : <></>}
                <NavLink to="/scoreboard">Score board</NavLink>
                <NavLink to="/about">About</NavLink>
                </DropButtonContent>
            }
            />
        </MobileNav>
        
        :
        <NavContainer>
            <Link to="/"><SiteLogo src={logo} alt="Art-E" /></Link>
            <NavRoutes>
            <NavLink to="/browse">Browse</NavLink>
                {isLoggedIn ? 
                    <>
                        <NavLink to="/quiz">Quiz</NavLink>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </>
                        : <></>}
                <NavLink to="/scoreboard">Score board</NavLink>
                <NavLink to="/about">About</NavLink>
                <UserFunctionsContainer>
                <UserDropButton
                    color="plain"
                    label={
                    <>
                        <Box direction="row"  gap="small">
                            {isLoggedIn ? <Avatar background="dark-4"><UserExpert color="light-1" /></Avatar>
                                        : <Avatar background="dark-4"><User color="light-1" /></Avatar>}
                                        </Box>
                    </>
                        }
                    dropAlign={{ top: 'bottom', right: 'right' }}
                    dropContent={
                        <>
                        {isLoggedIn ?
                        <>
                            <NavLink to="/user">My Account</NavLink>
                            <NavLink to="/logout">Logout</NavLink>
                        </> : 
                        <>
                            <NavLink to="/register-user">Registration</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                        }
                        </>    
                    }
                    />
                </UserFunctionsContainer>
            </NavRoutes>
        </NavContainer>
        }
        </>

    );
}

export default Navbar;
