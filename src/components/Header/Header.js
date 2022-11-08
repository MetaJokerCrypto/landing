import React from 'react';

import { Wrapper, HeaderWrapper, NavBar, NavItem, Logo, StyledLink } from './styled';

export const Header = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <StyledLink to='/'>
          <Logo>MJ</Logo>
        </StyledLink>
        <NavBar>
          <StyledLink to='/'>
            <NavItem>Play</NavItem>
          </StyledLink>
          <StyledLink to='/'>
            <NavItem>Все проекты</NavItem>
          </StyledLink>
          <StyledLink to='/blog'>
            <NavItem>Блог</NavItem>
          </StyledLink>
        <StyledLink to=''>
          <NavItem>О нас</NavItem>
        </StyledLink>
        </NavBar>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
