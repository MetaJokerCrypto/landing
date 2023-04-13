import React from 'react';

import { Wrapper, HeaderWrapper, NavBar, NavLogoItem, NavItem, Logo, StyledLink } from './styled';

const Header = () => (
  <Wrapper>
    <HeaderWrapper>
      <NavBar>
        <NavLogoItem>
          <StyledLink to="/">
            <Logo>MJ</Logo>
          </StyledLink>
        </NavLogoItem>
        <NavItem>
          <StyledLink to="/games">Games</StyledLink>
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
    </HeaderWrapper>
  </Wrapper>
);

export default Header;
