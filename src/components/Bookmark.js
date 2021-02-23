import React from 'react'
import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
// Icon
import icon from '../images/logo-mastercraft.svg';

const Bookmark = ({ loadPledge }) => {
    return (
        <BookMark>
            <img src={icon} alt="icon-logo" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <Buttons>
                <button onClick={loadPledge}>Back this project</button>
                <button>Bookmarked</button>
            </Buttons>
        </BookMark>
    )
}

const BookMark = styled(motion.div)`
    background: #fff;
    position: relative;
    padding: 2rem 1rem;
    border-radius: .5rem;
    text-align: center;
    /* box-shadow: 0 0 10px; */
    //box-shadow: 5px 5px 10px;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 20%);;

    img {
        position: absolute;
        top: -1.5rem;
        left: 50%;
        // laptop View
        @media (max-width: 992px) {
            left: 50%;
        }
        // Mobile View
        @media (max-width: 600px) {
            left: 45%;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    button {
        margin: 1rem;
    }
`;

export default Bookmark
