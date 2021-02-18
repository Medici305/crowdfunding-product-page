import React from 'react';
import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
import { Card } from './GlobalStyles';

const Detail = ({ click, setClick }) => {
    return (
        <StyleDetail>
            <h3>About this project</h3>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing height.
                Placing your monitor at eye level has the potential to improve your posture
                and make you more comfortable while at work, helping you stay focused on
                the task at hand.
                <br />
                <br />
                Featuring artisan craftsmanship, the simplicity of
                design creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
            </p>
            <Cards>
                {/* First Card */}
                <Card>
                    <Title>
                        <h4>Bamboo Stand</h4>
                        <h5>Pledge $25 or more</h5>
                    </Title>
                    <p>
                        You get an ergonomic stand made of natural bamboo. You've helped us
                        launch our promotional campaign, and you'll be added to a special Backer
                        member list.
                    </p>
                    <Reward>
                        <h1>101<span>left</span></h1>
                        <button onClick={() => setClick(true)}>Select Reward</button>
                    </Reward>
                </Card>
                {/* Second Card */}
                <Card>
                    <Title>
                        <h4>Black Edition Stand</h4>
                        <h5>Pledge $75 or more</h5>
                    </Title>
                    <p>
                        You get a Black Special Edition computer stand and a personal
                        thank you. You'll be added to our backer member list. Shipping is included.
                    </p>
                    <Reward>
                        <h1>64<span>left</span></h1>
                        <button>Select Reward</button>
                    </Reward>
                </Card>
                {/* Third Card */}
                <CardCustom>
                    <Title>
                        <h4>Mahogany Special Edition</h4>
                        <h5>Pledge $200 or more</h5>
                    </Title>
                    <p>
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
                        personal thank you. You'll be added to our Backer member list. Shipping is included.
                    </p>
                    <Reward>
                        <h1>0<span>left</span></h1>
                        <button>Out of stock</button>
                    </Reward>
                </CardCustom>
            </Cards>
        </StyleDetail>
    )
}

const StyleDetail = styled(motion.div)`
    background: #fff;
    position: relative;
    padding: 2rem;
    border-radius: .5rem;
    margin: 1rem 0;
    box-shadow: 2px 2px 10px rgb(169, 169, 169);
    p {
        font-size: 1.18rem;
    }
`;

const Cards = styled.div`
    //border: 2px solid black;
`;

const CardCustom = styled(Card)`
    opacity: .5;
    pointer-events: none;
    button {
        background: gray;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Reward = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default Detail
