import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Layout from 'components/Layout/Layout';
import Collections from 'components/Collections/Collections';

import { Section } from 'styles/pages/collection';

const CollectionPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Section>
          <Collections />
        </Section>
      </Layout>
    </ThemeProvider>
  );
};

export default CollectionPage;
