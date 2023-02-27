import styled, { css } from 'styled-components';
import Heading from 'components/Text/Heading';

export const StyledText = styled.span(
  ({ theme: { colors } }) => css`
    font-style: italic;
    color: ${colors.purple};
  `
);

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 10rem;
`;

export const MainHeading = styled(Heading)`
  font-size: 10rem;
`;

export const MainWrapper = styled.div`
  max-width: 60rem;
  display: flex;
  gap: 3rem;

  @media (max-width: 75rem) {
    flex-direction: column;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3.7rem;
`;

export const StarsImage = styled.div``;

export const MainTextWrapper = styled.div`
  width: 100%;
  align-items: start;
  margin: 10rem 0 0;
`;

export const RoadmapSection = styled.div`
  padding-bottom: 7rem;
`;
