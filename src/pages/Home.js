import React from 'react';
import Bookmark from '../components/Bookmark';
import Donation from '../components/Donation';
import Detail from '../components/Detail';
import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../Animation';

const Home = () => {
    return (
        <StyleHome variants={pageTransition} exit='exit' initial='hidden' animate='show' >
            <Container>

                {/* 1. Section One */}
                <Bookmark />
                {/* 2. Section Two */}
                <Donation />
                {/* 3. Section Three */}
                <Detail />

            </Container>

        </StyleHome>
    )
}

const StyleHome = styled(motion.div)`
    //border: 2px solid black;
    position: absolute;
    top: 19rem;
    left: 0;
    width: 100%;
    z-index: 10;
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

const Container = styled.div`
    //border: 3px solid blue;
`;

export default Home;