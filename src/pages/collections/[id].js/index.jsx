import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SEO from 'components/SEO/SEO';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { data } from 'data/cardsData';

import CollectionCard from 'components/CollectionCard/CollectionCard';

import Layout from 'components/Layout/Layout';

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

export const Head = () => <SEO />;

const Section = styled.section`
  height: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 0 5rem;
`;
