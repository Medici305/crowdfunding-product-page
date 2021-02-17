import React, { useState } from 'react';
// Style 
import styled from 'styled-components';
import bgMobile from '../images/image-hero-mobile.jpg';
import bg from '../images/image-hero-desktop.jpg';
import logo from '../images/logo.svg';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
// Router
import { Link } from 'react-router-dom';

const Nav = () => {
    // State
    const [isOpen, setIsOpen] = useState(false);
    return (
        <StyleNav>
            <nav>
                {/* 1.Logo */}
                <Link to='/'>
                    <Logo isOpen={isOpen}>
                        <img onClick={() => setIsOpen(false)} src={logo} alt="logo" />
                    </Logo>
                </Link>
                {/* 2. Hamburger */}
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon size='2x' icon={isOpen ? faTimes : faBars} />
                </Hamburger>
                {/* 3. Dropdown Menu */}
                <Menu isOpen={isOpen}>
                    <li onClick={() => setIsOpen(false)}>
                        <Link to='/about'>
                            About
                    </Link>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <Link to='/discover'>
                            Discover
                    </Link>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <Link to='/getStarted'>
                            Get Started
                    </Link>
                    </li>
                </Menu>
            </nav>
        </StyleNav>
    )
}

const StyleNav = styled.div`
    min-height: 60vh;
    background: url(${bg}) no-repeat center scroll;
    background-size: cover;
    position: relative;

    // Mobile View
    @media (max-width: 600px) {
        background-image: url(${bgMobile});
        min-height: 45vh;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    // Mobile view
    @media (max-width: 600px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
        transition: max-height .3s ease-in;
        background: #fff;
        margin-top: 1rem;
        border-radius: .3rem;

        li {
            padding: 1.7rem;
            width: 100%;
            text-align: center;
            transition: all .2s ease-in-out;
            &:hover {
                background: #B5ACAD;
            }
            a {
                color: black;
                font-weight: 700;
                font-size: 1.2rem;
            }
        }
    }
`;

const Logo = styled.div`
    cursor: pointer;
    @media(max-width: 600px) {
        img {
            width: 10rem;
        }
    }
`;

const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    // Mobile view
    @media(max-width: 600px) {
        display: flex;
    }
    svg {
        cursor: pointer;
        color: #fff;
        transition: all .5s ease -in -out;
    }
`;

export default Nav;