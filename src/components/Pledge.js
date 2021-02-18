import React from 'react';
import styled from 'styled-components';
import { Card } from './GlobalStyles';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Pledge = ({ click, setClick }) => {
    return (
        <StylePledge>
            <FontAwesomeIcon onClick={() => setClick(false)} size='2x' icon={faTimes} />
            <h3>Back this project</h3>
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
    )
}

const StylePledge = styled.div`
    position: absolute;
    top: 27rem;
    background: #fff;
    z-index: 15;

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
