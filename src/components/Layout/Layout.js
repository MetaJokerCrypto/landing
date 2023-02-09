import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
