import * as React from 'react';
import { Link } from 'gatsby';
import RegularText from 'components/Text/RegularText';
import Button from 'components/Button/Button';
import { ThemeProvider } from 'styled-components';
import { data } from 'data/mainBlockData';
import Carousel from 'components/Carousel/Carousel';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Layout from 'components/Layout/Layout';
import Starsfield from 'components/Starsfield/Starsfield';
import RoadmapBlock from 'components/RoadmapBlock/RoadmapBlock';
import MainBlock from 'components/MainBlock/MainBlock';
import ProjectInfoBlock from 'components/ProjectInfoBlock/ProjectInfoBlock';
import AboutBlock from 'components/AboutBlock/AboutBlock';

import { PageWrapper, RoadmapSection, TextContainer, CarouselSection, customButtonStyles } from 'styles/pages/index';

const Index = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Starsfield />
    <Layout>
      <PageWrapper>
        <section>
          <MainBlock />
        </section>
        <TextContainer>
          <section>
            <div>
              {data.map((item, i) => (
                <RegularText key={i}>{item}</RegularText>
              ))}
            </div>
            <Link to="/collection">
              <Button customStyles={customButtonStyles} isStartBtn>
                Начать игру
              </Button>
            </Link>
          </section>
          <CarouselSection>
            <Carousel />
          </CarouselSection>
          <section>
            <ProjectInfoBlock />
          </section>
          <RoadmapSection>
            <RoadmapBlock />
          </RoadmapSection>
          <section>
            <AboutBlock />
          </section>
        </TextContainer>
      </PageWrapper>
    </Layout>
  </ThemeProvider>
);

export default Index;
