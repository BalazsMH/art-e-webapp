import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/arte.png';
import {Avatar, Box, DropButton} from 'grommet';
import {UserFemale, Menu} from 'grommet-icons';
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
            <MenuDropButton
            label={
                <Menu/>
                }
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
                <DropButtonContent>
                <NavLink to="/browse">Browse</NavLink>
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">About</NavLink>
                {isLoggedIn ? <NavLink to="/favorites/0">Favorites</NavLink>
                            : <></>}
                </DropButtonContent>
            }
            />
            <Link to="/"><SiteLogo src={logo} alt="Art-E" /></Link>
            <UserDropButton
                    color="plain"
                    label={
                    <>
                        <Box direction="row"  gap="small">
                            {isLoggedIn ? <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                                        : <Avatar background="accent-2"><UserFemale color="accent-1" /></Avatar>}
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

        </MobileNav>
        
        :
        <NavContainer>
            <Link to="/"><SiteLogo src={logo} alt="Art-E" /></Link>
            <NavRoutes>
                <NavLink to="/browse">Browse</NavLink>
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">About</NavLink>
                {isLoggedIn ? <NavLink to="/favorites/0">Favorites</NavLink>
                            : <></>}
                <UserFunctionsContainer>
                <UserDropButton
                    color="plain"
                    label={
                    <>
                        <Box direction="row"  gap="small">
                            {isLoggedIn ? <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                                        : <Avatar background="accent-2"><UserFemale color="accent-1" /></Avatar>}
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
