import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavAnim } from '../Animation';
import bg from '../images/photo-1492138786289-d35ea832da43.jpg';


const About = () => {
    return (
        <>
            <Nav />
            <Background variants={NavAnim} initial='hidden' animate='show' />
        </>
    )
}

const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 60vh;
    background: url(${bg}) no-repeat center scroll;
    background-size: cover;
    // Mobile View
    @media (max-width: 600px) {
        min-height: 45vh;
    }
`;

export default About;