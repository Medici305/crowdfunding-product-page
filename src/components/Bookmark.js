import React from 'react'
import styled from 'styled-components';
// Icon
import icon from '../images/logo-mastercraft.svg';

const Bookmark = () => {
    return (
        <BookMark>
            <img src={icon} alt="icon-logo" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <Buttons>
                <button>Back this project</button>
                <button>Bookmarked</button>
            </Buttons>
        </BookMark>
    )
}

const BookMark = styled.div`
    background: #fff;
    position: relative;
    padding: 2rem 1rem;
    border-radius: .5rem;
    text-align: center;

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
