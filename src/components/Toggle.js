import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Toggle = ({ children, title, description, pledge, left, message }) => {
    // State
    const [toggle, setToggle] = useState(false);
    return (
        <StyleToggle toggle={toggle}>
            <motion.div layout onClick={() => setToggle(!toggle)} className="pledge" style={{ display: 'flex' }}>
                <CheckBox>
                    <input type="checkbox" />
                </CheckBox>
                <motion.div layout className="text">
                    <div className="option" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="select" style={{ display: 'flex' }}>
                            <h4>{title}</h4>
                            <h5>{pledge}</h5>
                        </div>
                        <h1>{left}<span>{message}</span></h1>
                    </div>
                    <p>
                        {description}
                    </p>
                </motion.div>
            </motion.div>
            {toggle ? children : ''}
        </StyleToggle>
    )
}

const StyleToggle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    transition: all .5s ease;
    border-color: ${({ toggle }) => (toggle ? 'hsl(176, 50%, 47%)' : 'hsl(0, 0%, 94.11764705882352%)')};
    border-width: 3px;
    border-style: solid;
    border-radius: .5rem;
    margin: 1rem 0;
    h4 {
        cursor: pointer;
        &:hover {
            color: hsl(176, 50%, 47%);
        }
    }
    h5 {
        margin-left: 1rem;
        font-size: 1rem;
    }
    p {
        margin: 1rem 0 0 0;
    }
`;

const CheckBox = styled.div`
        margin-right: 2rem;
`;

export default Toggle
