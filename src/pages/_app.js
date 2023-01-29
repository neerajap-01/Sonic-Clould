import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from '../components/constants/theme';
import './styles/style.css'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  background     :linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
}
#__next{
  height: 100%;
}
h1,h2,h3,h4,p{
  margin: 0;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
