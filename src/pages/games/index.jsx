import * as React from 'react';
import SEO from 'components/SEO/SEO';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Layout from 'components/Layout/Layout';
import Heading from 'components/Text/Heading';
import Collections from 'components/Collections/Collections';

import { Wrapper } from 'styles/pages/games';

const GamesPage = () => {
  return (
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
};

export default GamesPage;

export const Head = () => <SEO />;
