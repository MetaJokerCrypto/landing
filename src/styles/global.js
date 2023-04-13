import { createGlobalStyle } from 'styled-components';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: 0;
    margin-top: 0;
    outline: none;
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Montserrat&display=swap');
  };

  html, body, #___gatsby, #gatsby-focus-wrapper {
  height: 100%;
}

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.baseBackground};
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  };

  h1, h2 {
    font-family: 'Merriweather', serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
