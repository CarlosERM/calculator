import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles';
import theme1 from './styles/theme1';
function App() {
  return (
    <ThemeProvider theme={theme1}>
    <h1>Calculator</h1>
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
