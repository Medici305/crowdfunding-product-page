import React, { useState } from 'react';
import Dropdown from './Dropdown';
// Style 
import styled from 'styled-components';
import bgMobile from '../images/image-hero-mobile.jpg';
import bg from '../images/image-hero-desktop.jpg';
import logo from '../images/logo.svg';
import logo2 from '../images/logo-mastercraft.svg';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ click, setClick }) => {
    return (
        <StyleNav>
            <Navbar>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <nav>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </nav>

                {/* Hamburger Toggle */}
                <Toggle onClick={() => setClick(!click)}>
                    <FontAwesomeIcon size='2x' icon={click ? faTimes : faBars} />
                </Toggle>
            </Navbar>
            <Dropdown click={click} setClick={setClick} />
        </StyleNav>
    )
}

const StyleNav = styled.div`
    min-height: 60vh;
    background: url(${bg}) no-repeat center scroll;
    background-size: cover;

    // laptop View
    @media (max-width: 992px) {

    }
    // Mobile View
    @media (max-width: 600px) {
        background-image: url(${bgMobile});
        min-height: 45vh;
    }
`;

const Toggle = styled.div`
    display: none;
    color: #fff;
    cursor: pointer;
    @media (max-width: 600px) {
        display: block;
    }
`;

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 10rem;
    position: absolute;
    width: 100%;
    z-index: 10;
    @media (max-width: 600px) {
        padding: 2rem 1.5rem;
    }
`;

const Logo = styled.div`
    @media (max-width: 600px) {
        img {
            width: 10rem;
        }
    }
`;

export default Nav;