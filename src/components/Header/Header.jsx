import React, { useState } from 'react';

import MobileMenu from 'components/MobileMenu/MobileMenu';
import { Wrapper, HeaderWrapper, NavBar, MobileNavBar, NavLogoItem, NavItem, Logo, StyledLink } from './styled';

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
              <StyledLink to="/games">Мета-коллекции</StyledLink>
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
