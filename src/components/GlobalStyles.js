import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Commissioner', sans-serif;
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

    button {
        border: none;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 3rem;
        color: #fff;
        font-weight: 700;
        background: hsl(176, 72%, 28%);
    }
`;

export default GlobalStyle; 