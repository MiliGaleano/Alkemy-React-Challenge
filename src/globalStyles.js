import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: monospace;
        letter-spacing: 0.1em;
        box-sizing: border-box;
        overflow-x: hidden;
        transition: 0.6s;
    }

    a{
        text-decoration: none;
    }

    body{
        width: 100%;
        min-height: 100vh;
        background-color: #eeeeee;
    }
`;