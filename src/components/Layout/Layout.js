import React from 'react';

import Header from 'components/Header/Header';

import { Container } from './styled';

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
        <footer></footer>
      </Container>
    </>
  )
}

export default Layout
