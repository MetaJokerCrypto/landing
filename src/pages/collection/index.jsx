import * as React from 'react';

import SEO from 'components/SEO/SEO';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Heading from 'components/Text/Heading';

import Layout from 'components/Layout/Layout';
import Collections from 'components/Collections/Collections';

import { Section } from 'styles/pages/collection';

const CollectionPage = () => {
  return (
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
};

export default CollectionPage;

export const Head = () => <SEO />;
