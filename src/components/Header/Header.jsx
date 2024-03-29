import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

import MobileMenu from 'components/MobileMenu/MobileMenu';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <MobileMenu isOpen={isOpenMenu} handleMenuToggle={handleMenuToggle} />
      <Wrapper>
        <HeaderWrapper>
          <NavBar>
            <NavLogoItem>
              <StyledLink to="/">
                <Logo>MJ</Logo>
              </StyledLink>
            </NavLogoItem>
            <NavItem>
              <StyledLink to="/collections">Мета-коллекции</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/blog">Блог</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/p2b">P2B</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/about">О нас</StyledLink>
            </NavItem>
          </NavBar>
          <MobileNavBar>
            <StyledLink to="/">
              <Logo>MJ</Logo>
            </StyledLink>
            <div onClick={handleMenuToggle}>
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </MobileNavBar>
        </HeaderWrapper>
      </Wrapper>
    </>
  );
};

export default Header;

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
  ({ theme: { breakpoints, fontSize } }) => css`
    display: grid;
    gap: 1rem;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    max-width: 1332px;
    grid-template-columns: repeat(7, 1fr);
    font-size: ${fontSize.sm};

    @media (max-width: ${breakpoints.sm}) {
      display: none;
    }
  `
);

export const MobileNavBar = styled.ul(
  ({ theme: { breakpoints } }) => css`
    display: none;

    @media (max-width: ${breakpoints.sm}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
    }
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

export const NavLogoItem = styled(NavItem)(
  ({ theme: { breakpoints } }) => css`
    justify-self: start;
    grid-column: 1/4;

    @media (max-width: ${breakpoints.sm}) {
      grid-column: 1;
    }
  `
);

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
