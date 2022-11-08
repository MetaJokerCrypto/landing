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

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: ${theme.colors.black};
    color: white;
    font-family: 'Montserrat', sans-serif;
  };

  h1, h2 {
    font-family: 'Merriweather', serif;
    margin: 0;
    padding: 0;
  }
`;


export default GlobalStyle;
