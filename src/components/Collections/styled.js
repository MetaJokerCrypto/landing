import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button(
  ({ theme: { colors }, color }) => css`
    padding: 0.8rem 1rem;
    width: 8rem;
    background-color: ${color};
    margin: 1rem auto 0;
    font-weight: 700;
    border: none;
    border-radius: 2rem;
    color: ${colors.white};
    cursor: pointer;
  `
);

export const SliderCardsWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    align-content: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    justify-content: center;
    padding-bottom: 7rem;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `
);

export const SliderCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
`;
