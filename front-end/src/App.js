import Routes from "pages/Routes";
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { GlobalStyles } from "styles/GlobalStyle";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <title>Mental health</title>
      </Helmet>

      <Reset />
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  );
}

export default App;
