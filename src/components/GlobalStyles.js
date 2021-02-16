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
`;

export default GlobalStyle; 