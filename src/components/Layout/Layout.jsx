import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 0 32px;
`;
