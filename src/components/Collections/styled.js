import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  gap: 1.5rem;
`;

export const CardImg = styled.img``;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button(
  ({ theme: { colors }, color }) => css`
    padding: 0.5rem 1rem;
    width: 7rem;
    background-color: ${color};
    margin: 0 auto;
    border: none;
    border-radius: 1rem;
    color: ${colors.white};
    cursor: pointer;
  `
);
