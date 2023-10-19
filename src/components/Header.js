import React from 'react';
import { HeaderContainer, Logo, Nav } from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';

const Header = () => {
    console.log("Rendering Header");
    return (
        <HeaderContainer>
            <Logo>Jimmy O'Brien Jr.</Logo>
            <Nav>
                <Link to="/">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
