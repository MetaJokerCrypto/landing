import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 4rem;
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

export const SliderCardsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 3rem;
`;

export const SliderCard = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 12rem;
`;
