import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { Container } from './styled';

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
