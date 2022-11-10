import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { Container } from './styled';

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
