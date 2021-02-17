import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Commissioner', sans-serif;
        background: hsl(0, 0%, 94.11764705882352%);
    }

    h2 {
        font-size: 2rem;
        font-weight: 700; 
        padding: 1rem 0;
        // Mobile View
        @media (max-width: 600px) {
            font-size: 1.9rem;
        }
    }

    h3 {
        padding: 1rem 0;
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    h5 {
        color: hsl(176, 50%, 47%);
    }

    p {
        font-size: 1.2rem;
        color: hsl(0, 0%, 48%);
        line-height: 2rem;
        padding: .5rem 0;
    }

    li {
            color: #fff;
            list-style: none;
            margin: 0rem 1rem;
            cursor: pointer;
        }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 2rem 10rem;
            // laptop View
        @media (max-width: 992px) {
            padding: 2rem;
        }
            // Mobile View
        @media (max-width: 600px) {
            padding: 1rem;
        }
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    input[type='range'] {
        width: 100%;
        -webkit-appearance: none;
    }

    input[type='range']:focus {
        outline: none;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    span {
        color: hsl(0, 0%, 48%);
        font-size: 1rem;
        margin-left: .5rem;
        font-weight: 500;
    }

    button {
        border: none;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 3rem;
        color: #fff;
        font-weight: 700;
        background: hsl(176, 50%, 47%);
        &:hover {
            background: hsl(176, 72%, 28%);
        }
    }
`;

export default GlobalStyle; 