import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { Content } from './styled'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
