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
        @media (max-width: 600px) {
            display: none;
        }
    }
`;

export default GlobalStyle; 