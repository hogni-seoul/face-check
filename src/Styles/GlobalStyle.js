import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 16px;
        font-weight: 500;
        background-color: #f1f2f5;
    }
    ol,
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
