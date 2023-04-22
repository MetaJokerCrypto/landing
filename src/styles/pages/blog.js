import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  padding-top: 7rem;
  margin-bottom: 5rem;
`;

export const CardList = styled.ol(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem 5rem;
    padding: 0;
    list-style: none;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `
);

export const StyledLink = styled(Link)`
  width: 100%;
  color: white;
  text-decoration: none;
`;
