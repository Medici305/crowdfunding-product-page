import React, { useRef } from 'react';
import styled from 'styled-components';
import { Card } from './GlobalStyles';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
// Animate
import { motion } from 'framer-motion'

const Pledge = ({ open, setOpen }) => {
    // Ref
    const modalRef = useRef();
    //Function
    const closePledgeHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('close')) {
            document.body.style.overflow = 'auto';
            setOpen(!open);
        }
    }

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setOpen(false);
        }
    }
    return (
        <>
            {open && (
                <Shadow ref={modalRef} onClick={closeModal}>
                    <StylePledge>
                        <div className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3>Back this project</h3>
                            <div onClick={closePledgeHandler} className="close" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon size='2x' icon={faTimes} style={{ pointerEvents: 'none' }} />
                            </div>
                        </div>
                        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                        <div className="cards">
                            <Card1>
                                <input type="checkbox" />
                                <div className="text">
                                    <h4>Pledge with no reward</h4>
                                    <p>
                                        Choose to support us without a reward if you simply believe in our project.
                                        As a backer, you will be signed up to receive product updates via email.
                            </p>
                                </div>
                            </Card1>
                        </div>
                    </StylePledge>
                </Shadow>
            )}
        </>
    )
}

const Shadow = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0,0,0,.9);
    padding: 2rem 22rem;
    z-index: 2;
`;

const StylePledge = styled(motion.div)`
    width: 80%;
    margin: auto;
    background: #fff;
    padding: 1rem;
    border-radius: .5rem;


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

const Card1 = styled(Card)`
    display: flex;
`;

export default Pledge
