import React, { useState, useRef } from 'react';
import EnterPledge from './EnterPledge';
import ThankYou from './ThankYou';
import { Basic, Bambo, Black, Mahogany } from '../util';
import Toggle from './Toggle';
import styled from 'styled-components';
import { Card } from './GlobalStyles';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// Animate
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { PledgeAnim } from '../Animation';

const Pledge = ({ open, setOpen }) => {
    // State
    const [confirm, setConfirm] = useState(false);
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
            document.body.style.overflow = 'auto';
            setOpen(false);
        }
    }
    return (
        <>
            <AnimateSharedLayout>
                <AnimatePresence>
                    {open && (
                        <Shadow ref={modalRef} onClick={closeModal}>
                            <StylePledge variants={PledgeAnim} exit='exit' initial='hidden' animate='show'>
                                <div className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3>Back this project</h3>
                                    <div onClick={closePledgeHandler} className="close" style={{ cursor: 'pointer' }}>
                                        <FontAwesomeIcon size='2x' icon={faTimes} style={{ pointerEvents: 'none' }} />
                                    </div>
                                </div>
                                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                                <div className="cards">
                                    {/* First Card */}
                                    <Toggle title={Basic.title} description={Basic.description}>
                                        <EnterPledge open={open} setOpen={setOpen} confirm={confirm} setConfirm={setConfirm} />
                                    </Toggle>
                                    {/* Second Card */}
                                    <Toggle title={Bambo.title} description={Bambo.description} pledge={Bambo.pledge} left={Bambo.left} message='left'>
                                        <EnterPledge open={open} setOpen={setOpen} confirm={confirm} setConfirm={setConfirm} />
                                    </Toggle>
                                    {/* Third Card */}
                                    <Toggle title={Black.title} description={Black.description} pledge={Black.pledge} left={Black.left} message='left'>
                                        <EnterPledge open={open} setOpen={setOpen} confirm={confirm} setConfirm={setConfirm} />
                                    </Toggle>
                                    {/* Fourth Card */}
                                    <Toggle title={Mahogany.title} description={Mahogany.description} pledge={Mahogany.pledge} left={Mahogany.left} message='left' style={{
                                        opacity: '.5',
                                        pointerEvents: 'none'
                                    }}>
                                        <EnterPledge open={open} setOpen={setOpen} confirm={confirm} setConfirm={setConfirm} />
                                    </Toggle>
                                </div>
                            </StylePledge>
                        </Shadow>
                    )}
                    {confirm ? (<ThankYou confirm={confirm} setConfirm={setConfirm} />) : ''}
                </AnimatePresence>
            </AnimateSharedLayout>
        </>
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
    padding: 2rem 22rem;
    overflow-y: scroll;
    z-index: 2;
    
    // laptop View
    @media (max-width: 992px) {
        padding: 1rem 1rem;
    }
    // Mobile View
    @media (max-width: 600px) {
        padding: 1rem 2rem;
    }
`;

const StylePledge = styled(motion.div)`
    margin: auto;
    background: #fff;
    padding: 1rem 3rem;
    border-radius: .5rem;
    p {
        font-size: 1rem;
    }
    h1 {
        font-size: 1.3rem;
    }
    h4 {
        font-size: 1.1rem;
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

const CardBox = styled(Card)`
    display: flex;
    flex-direction: column;
    h4 {
        cursor: pointer;
        &:hover {
            color: hsl(176, 50%, 47%);
        }
    }
    p {
        margin: 1rem 0 0 0;
    }
`;

export default Pledge
