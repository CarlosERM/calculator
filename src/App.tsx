import styled, { ThemeProvider } from 'styled-components'
import Calculator from './components/Main';
import { GlobalStyle } from './styles/GlobalStyles';
import theme1 from './styles/theme1';
function App() {
  return (
    <ThemeProvider theme={theme1}>
    <Calculator />
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
