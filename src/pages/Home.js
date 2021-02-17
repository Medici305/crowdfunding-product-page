import React from 'react';
import Bookmark from '../components/Bookmark';
import Donation from '../components/Donation';
import styled from 'styled-components';

const Home = () => {
    return (
        <StyleHome>
            <Container>

                {/* 1. Section One */}
                <Bookmark />
                {/* 2. Section Two */}
                <Donation />
                {/* 3. Section Three */}
                <Detail>

                </Detail>

            </Container>

        </StyleHome>
    )
}

const StyleHome = styled.div`
    border: 2px solid black;
    position: absolute;
    top: 19rem;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 2rem 23rem;

    // laptop View
    @media (max-width: 992px) {
        padding: 1rem 10rem;
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

const Detail = styled.div`

`;


export default Home;