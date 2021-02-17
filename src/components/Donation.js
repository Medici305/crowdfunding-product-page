import React from 'react';
import styled from 'styled-components';

const Donation = () => {
    return (
        <StyleDonation>
            <Info>
                <Doners>
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                </Doners>
                <Line />
                <Doners>
                    <h1>5,007</h1>
                    <p>total backers</p>
                </Doners>
                <Line />
                <Doners>
                    <h1>56</h1>
                    <p>days left</p>
                </Doners>
            </Info>
            <Range>
                <input type="range" value='89' min='0' max='100' />
                <TrackDonation></TrackDonation>
            </Range>
        </StyleDonation>
    )
}

const StyleDonation = styled.div`
    background: #fff;
    position: relative;
    padding: 2rem 1rem;
    border-radius: .5rem;
    margin: 1rem 0;
    box-shadow: 2px 2px 10px rgb(169, 169, 169);
`;

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const Doners = styled.div`
    p {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

const Line = styled.div`
    //height: 3rem;
    width: .1rem;
    background: hsl(0, 0%, 78.82352941176471%);
`;

const Range = styled.div`
    position: relative;
    width: 90%;
    margin: auto;
    height: 1rem;
    background: hsl(0, 0%, 94.11764705882352%);
    border-radius: 1rem;
    margin-top: 2rem;
`;

const TrackDonation = styled.div`
    background: hsl(176, 50%, 47%);
    position: absolute;
    width: 89%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 1rem;
`;

export default Donation
