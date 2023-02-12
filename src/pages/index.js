import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Layout from 'components/Layout/Layout';
import Starsfield from 'components/Starsfield/Starsfield';
import RoadmapBlock from 'components/RoadmapBlock/RoadmapBlock';
import MainBlock from 'components/MainBlock/MainBlock';
import ProjectInfoBlock from 'components/ProjectInfoBlock/ProjectInfoBlock';
import AboutBlock from 'components/AboutBlock/AboutBlock';

import {
  Container,
  MainSection,
} from 'styles/pages/index';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Starsfield />
      <Layout>
        <Container>
          <MainSection>
            <MainBlock />
          </MainSection>
          <section>
            <ProjectInfoBlock />
          </section>
          <section>
            <RoadmapBlock />
          </section>
          <section>
            <AboutBlock />
          </section>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
