import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  max-width: 60rem;
  padding-top: 8rem;
  margin: 0 auto;
`;

export const ListWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `
);

export const Game = styled.div(
  ({ theme: { fontSize, colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9rem;
    padding: 1 0.5rem;
    font-size: ${fontSize.md};
    border-radius: 0.2rem;
    background-color: ${colors.textArea};
    box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1), 0 0 0 1px hsla(230, 13%, 9%, 0.075),
      0 0.3px 0.4px hsla(230, 13%, 9%, 0.02), 0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),
      0 3.5px 6px hsla(230, 13%, 9%, 0.09);
  `
);

export const GameTitle = styled.span(
  ({ theme: { colors, fontSize } }) => css`
    font-size: ${fontSize.lg};
    color: ${colors.white};
  `
);

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
