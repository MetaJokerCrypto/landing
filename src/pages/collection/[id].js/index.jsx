import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { data } from 'data/cardsData';

import CollectionCard from 'components/CollectionCard/CollectionCard';

import Layout from 'components/Layout/Layout';

import { Section } from 'styles/pages/collectionCard';

const CollectionCardPage = ({ location }) => {
  const currentPath = location.pathname;
  const currentId = String(currentPath.match(/\d+/g));

  const currentCardData = data.find(({ id }) => id === currentId);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Section>
          <CollectionCard data={currentCardData} />
        </Section>
      </Layout>
    </ThemeProvider>
  );
};

export default CollectionCardPage;
