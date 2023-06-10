import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SEO from 'components/SEO/SEO';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Heading from 'components/Text/Heading';

import Layout from 'components/Layout/Layout';
import Collections from 'components/Collections/Collections';

const CollectionPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout>
      <Section>
        <Heading type="h1">Коллекция</Heading>
        <Collections />
      </Section>
    </Layout>
  </ThemeProvider>
);

export default CollectionPage;

export const Head = () => <SEO />;

const Section = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 3rem;
`;
