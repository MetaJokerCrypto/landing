import styled, { css } from 'styled-components';
import Heading from 'components/Text/Heading';

export const StyledText = styled.span(
  ({ theme: { colors } }) => css`
    font-style: italic;
    color: ${colors.purple};
  `
);

export const PageWrapper = styled.section`
  padding: 10rem 0 4rem;
`;

export const TextContainer = styled.div`
  max-width: 60rem;
  margin: 5rem auto 0;
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

export const RoadmapSection = styled.div`
  padding-bottom: 7rem;
`;

export const customButtonStyles = ({ theme: { colors, fontSize } }) => css`
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
