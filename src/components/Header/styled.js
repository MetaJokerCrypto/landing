import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from 'gatsby-link';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const HeaderWrapper = styled.div(
  ({ theme: { breakpoints, colors } }) => css`
    padding: 1rem 5rem;
    background-color: ${colors.header};
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    @media (max-width: ${breakpoints.md}) {
      padding: 1rem 2rem;
    }
  `
);

export const NavBar = styled.ul(
  ({ theme: { fontSize } }) => css`
    display: grid;
    gap: 0.5rem;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1332px;
    grid-template-columns: repeat(6, 1fr);
    font-size: ${fontSize.sm};
  `
);

export const NavItem = styled.li(
  ({ theme: { breakpoints } }) => css`
    justify-self: end;
    transition: transform ease-in-out 0.3s;
    list-style-type: none;

    &:hover {
      transform: translateY(-2px);
      transition: transform ease-in-out 0.3s;
    }

    @media (max-width: ${breakpoints.md}) {
      justify-self: center;
    }
  `
)

export const Logo = styled.span(
  ({ theme: { fontSize } }) => css`
    font-family: 'Merriweather', serif;
    font-size: ${fontSize.lg};
    font-weight: 700;
    cursor: pointer;
  `
);

export const NavLogoItem = styled(NavItem)`
  justify-self: start;
  grid-column: 1/3;
`;

export const StyledLink = styled(Link)(
  ({ theme: { breakpoints, colors, fontSize } }) => css`
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: 700;
    color: ${colors.white};

    @media (max-width: ${breakpoints.md}) {
      font-size: ${fontSize.xs};
    }
  `
);
