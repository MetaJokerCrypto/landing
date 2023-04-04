import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from 'gatsby-link';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const HeaderWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    padding: 1.5rem 5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(40px);

    @media (max-width: ${breakpoints.md}) {
      padding: 1.5rem;
    }
  `
);

export const NavBar = styled.ul(
  ({ theme: { fontSize } }) => css`
    display: grid;
    align-items: center;
    margin: 0 auto;
    max-width: 1332px;
    grid-template-columns: repeat(5, 1fr);
    font-size: ${fontSize.sm};
  `
);

export const NavItem = styled.li(
  ({ isLogo }) => css`
    justify-self: ${isLogo ? 'start' : 'center'};
    transition: transform ease-in-out 0.3s;
    list-style-type: none;

    &:hover {
      transform: translateY(-2px);
      transition: transform ease-in-out 0.3s;
    }
  `
);

export const Logo = styled.span(
  ({ theme: { fontSize } }) => css`
    font-family: 'Merriweather', serif;
    font-size: ${fontSize.lg};
    font-weight: 700;
    cursor: pointer;
  `
);

export const StyledLink = styled(Link)(
  ({ theme: { colors } }) => css`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: ${colors.white};
  `
);
