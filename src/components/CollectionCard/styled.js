import styled, { css } from 'styled-components';

export const CardWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    gap: 5rem;
    margin-bottom: 2rem;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
      align-items: center;
    }
  `
);

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 46px;
  font-weight: 700;
`;

export const Title = styled.span(
  ({ theme: { breakpoints, fontSize } }) => css`
    font-size: ${fontSize.xl};

    @media (max-width: ${breakpoints.md}) {
      font-size: ${fontSize.lg};
    }
  `
);

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 380px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  font-style: italic;
  gap: 2rem;
`;

export const customButtonStyles = ({ theme: { colors, fontSize } }) => css`
  width: 15rem;
  padding: 0.8em 2.5em;
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
