import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Ubuntu', sans-serif;
    font-size: 62.5%;
    color: ${(p) => p.theme.colors.text.default};    
  }
  

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-size: 1.6rem;
  }

  input, textarea {
    font: inherit;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Cormorant', serif
  }
`;
