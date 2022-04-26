import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import Calculator from "./components/Main";
import { ContextProvider, useMyContext } from "./context";
import { GlobalStyle } from "./styles/GlobalStyles";
import theme1 from "./styles/theme1";
import theme2 from "./styles/theme2";
import theme3 from "./styles/theme3";

function App() {
  const [theme, setTheme] = React.useState(theme1);

  const { toggle } = useMyContext();
  React.useEffect(() => {
    if (toggle === 0) {
      setTheme(theme1);
    } else if (toggle === 1) {
      setTheme(theme2);
    } else if (toggle === 2) {
      setTheme(theme3);
    }
  }, [toggle]);

  return (
    <ThemeProvider theme={theme}>
      <Calculator />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
