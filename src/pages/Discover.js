import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Pledge from '../components/Pledge';
import { NavAnim } from '../Animation';
import bg from '../images/photo-1582787231487-35f4b800433f.jpg';


const Discover = () => {
    return (
        <>
            <Background variants={NavAnim} initial='hidden' animate='show' />
            <Pledge />
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

export default Discover;