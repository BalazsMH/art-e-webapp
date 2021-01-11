import React from 'react';
import { logo } from '../../images/Site-logo';

const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="Site Logo" /><br/>
            <div>
                <a href="/browse">Browse</a>
                <a href="/quiz">Types</a>
                <a href="/register-user">Registration</a>
                <a href="/about">About</a>
            </div>
        </header>
    );
}

export default Navbar;