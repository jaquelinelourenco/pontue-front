import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        pandding: 0;
        box-sizing; border-box;
    }

    body {
        widht: 100vw;
        height: 100vh;
        background-color: #C7C9D1;
        font-family: Arial, Hevetica, sans-serif;
    }
`;

export default GlobalStyle