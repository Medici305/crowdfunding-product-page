import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from './GlobalStyles';
import { motion } from 'framer-motion';

const EnterPledge = ({ confirm, setConfirm, open, setOpen }) => {
    // State
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState(false);
    // Function
    const checkInputHandler = (e) => {
        e.preventDefault();
        if (isNaN(input)) {
            setSubmit(true);
            return;
        }
        setSubmit(false);
        setOpen(!open);
        setConfirm(!confirm);
    }
    return (
        <>
            <Line />
            <motion.div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Enter your pledge</p>
                <form className="amount" style={{ display: 'flex' }}>
                    <CustomButton>
                        <h4>$</h4>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" required />
                    </CustomButton>
                    <button type='submit' onClick={checkInputHandler}>Continue</button>
                </form>
            </motion.div>
            {submit && (
                <div className="error" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <h6>Invalid Input, Please Try Again!</h6>
                </div>
            )}
        </>
    )
}

const CustomButton = styled.div`
    border: 1px solid hsl(176, 50%, 47%);
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    width: 7rem;
    margin-right: 2rem;
    h4 {
        color: #a2a2a2;
        padding-right: 1rem;
    }
`;

export default EnterPledge;
