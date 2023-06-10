import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';

import RegularText from 'components/Text/RegularText';
import Button from 'components/Button/Button';
import Carousel from 'components/Carousel/Carousel';
import SEO from 'components/SEO/SEO';
import Layout from 'components/Layout/Layout';
import Starsfield from 'components/Starsfield/Starsfield';
import RoadmapBlock from 'components/RoadmapBlock/RoadmapBlock';
import MainBlock from 'components/MainBlock/MainBlock';
import ProjectInfoBlock from 'components/ProjectInfoBlock/ProjectInfoBlock';
import AboutBlock from 'components/AboutBlock/AboutBlock';

import { data } from 'data/mainBlockData';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

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
            <Link to="/collections">
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

export const Head = () => <SEO />;

const PageWrapper = styled.section`
  padding: 10rem 0 4rem;
`;

const TextContainer = styled.div`
  max-width: 60rem;
  margin: 5rem auto 0;
`;

const CarouselSection = styled.section`
  margin-bottom: 6rem;
`;

const RoadmapSection = styled.div`
  padding-bottom: 7rem;
`;

const customButtonStyles = ({ theme: { colors, fontSize } }) => css`
  padding: 0.8em 2.5em;
  margin: 2rem 0 5rem;
  font-size: ${fontSize.md};
  font-weight: 700;
  color: ${colors.white};
  border-radius: 2rem;
  background: linear-gradient(217deg, rgb(255 153 255) 0%, rgb(9 73 122 / 73%) 62%);
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
