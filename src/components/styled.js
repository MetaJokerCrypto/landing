import styled, { css } from 'styled-components';

export const StyledText = styled.span(
  ({ theme: { colors }} ) => css`
    font-style: italic;
    color: ${colors.purple};
  `,
);

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13rem 0 4rem;
`;

export const RegularSection = styled.section`
  margin-bottom: 5rem;
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 75rem) {
    flex-direction: column;
  };
`;

export const StarsImage = styled.div`
`;

export const MainTextWrapper = styled.div`
  width: 100%;
  align-items: start;
  margin: 5rem 0 0;
`;

export const customButtonStyles = ({ theme: { colors, fontSize } }) => css`
  padding: 0.8em 2.5em;
  margin-top: 2rem;
  font-size: ${fontSize.md};
  font-weight: 700;
  color: ${colors.white};
  border-radius: 2rem;
  background: linear-gradient(217deg,rgb(255 153 255) 0%,rgb(9 73 122 / 73%) 62%);
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const customHighlightStyles = ({ theme: { colors } }) => css`
  color: #fcf6a9c7;
  font-weight: 600;
`
