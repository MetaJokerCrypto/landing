import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { Wrapper, Content } from './styled'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </Wrapper>
      <Header />
    </ThemeProvider>
  );
};

export default Layout;
