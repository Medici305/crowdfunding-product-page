import React, { useRef } from 'react';
import styled from 'styled-components';
import { Card } from './GlobalStyles';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
// Animate
import { AnimatePresence, motion } from 'framer-motion';
import { PledgeAnim } from '../Animation';

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
            document.body.style.overflow = 'auto';
            setOpen(false);
        }
    }
    return (
        <>
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
                                <CardBox>
                                    <CheckBox>
                                        <input type="checkbox" />
                                    </CheckBox>
                                    <div className="text">
                                        <h4>Pledge with no reward</h4>
                                        <p>
                                            Choose to support us without a reward if you simply believe in our project.
                                            As a backer, you will be signed up to receive product updates via email.
                            </p>
                                    </div>
                                </CardBox>
                                <CardBox>
                                    <CheckBox>
                                        <input type="checkbox" />
                                    </CheckBox>
                                    <div className="text">
                                        <Title>
                                            <Subscription>
                                                <h4>Bambo Stand</h4>
                                                <h5>Pledge $25 or more</h5>
                                            </Subscription>
                                            <h1>101<span>left</span></h1>
                                        </Title>
                                        <p>
                                            You get an ergonomic stand made of bamboo. You've helped us launch
                                            our promotional campaign, and you'll be added to a special Backer member list.
                                    </p>
                                    </div>
                                </CardBox>
                                <CardBox>
                                    <CheckBox>
                                        <input type="checkbox" />
                                    </CheckBox>
                                    <div className="text">
                                        <Title>
                                            <Subscription>
                                                <h4>Black Edition Stand</h4>
                                                <h5>Pledge $75 or more</h5>
                                            </Subscription>
                                            <h1>64<span>left</span></h1>
                                        </Title>
                                        <p>
                                            You get a Black Special Edition computer stand and a personal thank you.
                                            You'll be added to our Backer memeber list. Shipping is included.
                                    </p>
                                    </div>
                                </CardBox>
                                <CustomBox>
                                    <CheckBox>
                                        <input type="checkbox" />
                                    </CheckBox>
                                    <div className="text">
                                        <Title>
                                            <Subscription>
                                                <h4>Mahogany Special Edition</h4>
                                                <h5>Pledge $200 or more</h5>
                                            </Subscription>
                                            <h1>0<span>left</span></h1>
                                        </Title>
                                        <p>
                                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
                                            thank you. You'll be added to our Backer member list. Shipping is included.
                                    </p>
                                    </div>
                                </CustomBox>
                            </div>
                        </StylePledge>
                    </Shadow>
                )}
            </AnimatePresence>
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

const CustomBox = styled(CardBox)`
    opacity: .5;
    pointer-events: none;
`;

const CheckBox = styled.div`
        margin-right: 2rem;
    input {
        //margin-right: 2rem;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Subscription = styled.div`
    display: flex;
    align-items: center;
    h4 {
        margin-right: 2rem;
    }
`;

export default Pledge
