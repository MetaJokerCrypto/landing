import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { Wrapper, Container } from './styled';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
    <Footer />
    <Header />
  </ThemeProvider>
);

export default Layout;
