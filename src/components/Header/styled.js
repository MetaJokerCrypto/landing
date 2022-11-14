import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(40px);
`;

export const NavBar = styled.div(
  ({ theme: { fontSize }}) => css`
    display: flex;
    gap: 4rem;
    font-size: ${fontSize.sm};
  `,
);

export const NavItem = styled.div(
  ({ theme: { colors } }) => css`
    color: ${colors.white};
    transition: transform ease-in-out 0.5s;
    font-weight: 500;

    &:hover {
      transform: translateY(-2px);
      transition: transform ease-in-out 0.3s;
    }
  `,
);

export const Logo = styled.span(
  ({ theme: { colors, fontSize }}) => css`
    color: #fff;
    font-family: 'Merriweather', serif;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
  `,
);

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
