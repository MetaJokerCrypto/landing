import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

export const Wrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    width: 100%;
    border: 1px solid white;

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `
);

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Title = styled.span(
  ({ theme: { colors, fontSize } }) => css`
    margin-bottom: 1.5rem;
    font-size: ${fontSize.md};
    color: ${colors.blue};
  `
);

export const Date = styled.span(
  ({ theme: { colors, fontSize } }) => css`
    font-size: ${fontSize.xs};
    color: ${colors.white};
  `
);

export const StyledLink = styled(Link)(
  ({ theme: { colors } }) => css`
    text-decoration: none;
    color: ${colors.pink};
  `
);
