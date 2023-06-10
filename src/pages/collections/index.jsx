import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import SEO from 'components/SEO/SEO';
import Layout from 'components/Layout/Layout';
import Heading from 'components/Text/Heading';
import Collections from 'components/Collections/Collections';

const CollectionsPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout>
      <Wrapper>
        <Heading type="h1">Мета-коллекции</Heading>
        <Collections isSliderType />
      </Wrapper>
    </Layout>
  </ThemeProvider>
);

export default CollectionsPage;

export const Head = () => <SEO />;

const Wrapper = styled.div`
  max-width: 60rem;
  padding-top: 8rem;
  margin: 0 auto;
`;
