import React, { useState } from 'react';
// Style
import styled from 'styled-components';
// Animation 
import { motion } from 'framer-motion';
import { slide, fade, menuAnim } from '../Animation';
// Router
import { Link } from 'react-router-dom';


const Dropdown = ({ click, setClick }) => {
    return (
        <>
            {click && (
                <StyleDropDown variants={fade} initial='hidden' animate='show'>
                    <StyleMenu variants={menuAnim} exit='exit' initial='hidden' animate='show'>

                        <li>
                            <Link to='/about'>About</Link>
                            <Line></Line>
                        </li>

                        <Link to='/discover'>
                            <li>Discover</li>
                            <Line></Line>
                        </Link>
                        <Link to='/getStarted'>
                            <li>Get Started</li>
                        </Link>
                    </StyleMenu>
                </StyleDropDown>
            )}
        </>
    )
}

const StyleDropDown = styled(motion.div)`
    @media (max-width: 600px) {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.8);
        display: flex;
        justify-content: center;
        transition: all .5s ease-in-out;
    }
`;

const StyleMenu = styled(motion.ul)`
    position: absolute;
    display: none;
    @media (max-width: 600px) {
        display: block;
        width: 88%;
        margin-top: 7rem;
        background: #fff;
        border-radius: .5rem;
        li {
            color: black;
            font-weight: 700;
            font-size: 1.2rem;
            padding: 1.5rem 1rem;
            &:hover {
                background-color:hsl(0, 0%, 71.37254901960785%);    
            }
        }
    }
`

const Line = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: block;
        width: 100%;
        height: .1rem;
        text-align: center;
        background-color:hsl(0, 0%, 71.37254901960785%);
    }
`;

export default Dropdown;