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
  padding: 13rem 0 0;
`;
export const RegularSection = styled.section`
  margin-bottom: 5rem;
`

export const MainWrapper = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 75rem) {
    flex-direction: column;
  }
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
  margin: 1rem 0 7rem;
  color: ${colors.white};
  background-color: ${colors.black};
  font-size: ${fontSize.md};
  border: 1px solid ${colors.white};
  transition: border ease-in-out 0.5s;
  &:hover {
    border-width: 1px;
    border-image: linear-gradient(to bottom, #c271c2, #0d5f9e) 1;
    transition: border ease-in-out 0.5s;
  }
`;

export const customTextStyles = ({ theme: { colors } }) => css`
  color: ${colors.lightBlue};
`
