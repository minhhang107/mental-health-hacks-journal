import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    color: ${(p) => p.theme.colors.text.default};    
  }
  

  *, *::before, *::after {
    box-sizing: border-box;
    font: inherit;
  }

  a {
    text-decoration: none;

    &, :visited {
      color: inherit;
    }
  }
  

  html, body, #root {
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    
  }

  button {
    cursor: pointer;
    border:none;
  }  
`;
