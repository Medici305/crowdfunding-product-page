import React, { useState } from 'react';
import Nav from '../components/Nav';
import Bookmark from '../components/Bookmark';
import Donation from '../components/Donation';
import Detail from '../components/Detail';
import styled from 'styled-components';
// Animation
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { pageTransition, NavAnim } from '../Animation';
// Images
import bgMobile from '../images/image-hero-mobile.jpg';
import bg from '../images/image-hero-desktop.jpg';
import Pledge from '../components/Pledge';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[1];
    // State 
    const [open, setOpen] = useState(false);
    return (
        <>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    <Pledge open={open} setOpen={setOpen} />
                </AnimatePresence>
                <Nav />
                <Background variants={NavAnim} initial='hidden' animate='show' />
                <StyleHome>

                    <Container variants={pageTransition} exit='exit' initial='hidden' animate='show'>

                        {/* 1. Section One */}
                        <Bookmark />
                        {/* 2. Section Two */}
                        <Donation />
                        {/* 3. Section Three */}
                        <Detail open={open} setOpen={setOpen} />
                    </Container>

                </StyleHome>
            </AnimateSharedLayout>
        </>
    )
}


const Section = styled.div`

    padding: 2rem 22rem;
    border: 5px solid red;
`;

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
        background-image: url(${bgMobile});
        min-height: 45vh;
    }
`;

const StyleHome = styled(motion.div)`
    //border: 2px solid black;
    position: relative;
    top: 13rem;
    left: 0;
    width: 100%;
    padding: 2rem 22rem;

    // laptop View
    @media (max-width: 992px) {
        padding: 1rem 7rem;
    }
    // Mobile View
    @media (max-width: 600px) {
        padding: 1rem 2rem;
        top: 16rem;
    }
`;

const Container = styled(motion.div)`
    //border: 3px solid blue;
`;

export default Home;