import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Ubuntu', sans-serif;
    font-size: 62.5%;
    color: ${(p) => p.theme.colors.text.default};    
  }
  

  *, *::before, *::after {
    box-sizing: border-box;
    font: inherit;

  }

  html, body {
    font-size: 1.6rem;
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Cormorant', serif
  }
`;
