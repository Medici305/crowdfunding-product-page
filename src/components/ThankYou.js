import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import check from '../images/icon-check.svg';

const ThankYou = (confirm, setConfirm) => {
    // State
    const [popup, setPopup] = useState(true);
    const closePopup = () => {
        
    }
    return (
        <Shadow>
            <StyleThank>
                <img src={check} alt="check" />
                <h3>Thanks for your support!</h3>
                <p>
                    Your pledge brings us one step closer to sharing Mastercraft
                    Bamboo Monitor Riser worldwide. You will get email once our
                    campaign is completed.
                </p>
                <button onClick={closePopup}>Got it!</button>
            </StyleThank>
        </Shadow>
    )
}

const Shadow = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0,0,0,.6);
    padding: 1rem 30rem;
    overflow-y: scroll;
    z-index: 2;
    
    // laptop View
    @media (max-width: 992px) {
        padding: 1rem 6rem;
    }
    // Mobile View
    @media (max-width: 600px) {
        padding: 1rem 2rem;
    }
`;

const StyleThank = styled(motion.div)`
    text-align: center;
    background: #fff;
    padding: 2rem 3rem;
    border-radius: .5rem;
    transform: translateY(50%);
    p {
        font-size: 1rem;
    }
    button, h3 {
        margin-top: 1rem;
    }




// laptop View
@media (max-width: 992px) {
    padding: 2rem 4rem;
}
// Mobile View
@media (max-width: 600px) {
    padding: 1rem 2rem;
}
`;

export default ThankYou
