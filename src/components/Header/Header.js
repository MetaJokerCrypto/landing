import React from 'react';

import { Wrapper, HeaderWrapper, NavBar, NavItem, Logo, StyledLink } from './styled';

export const Header = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <StyledLink to="/">
          <Logo>MJ</Logo>
        </StyledLink>
        <NavBar>
        <StyledLink to='/games'>
            <NavItem>Games</NavItem>
          </StyledLink>
          <StyledLink to='/blog'>
            <NavItem>Блог</NavItem>
          </StyledLink>
          <StyledLink to='/p2b'>
            <NavItem>P2B</NavItem>
          </StyledLink>
        <StyledLink to='/about'>
          <NavItem>О нас</NavItem>
        </StyledLink>
        </NavBar>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
