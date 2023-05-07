import React, { useEffect, useRef } from 'react';

import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';

const MobileMenu = ({ isOpen, handleMenuToggle }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current && isOpen) {
      disableBodyScroll(menuRef.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  });

  return (
    <Wrapper isOpen={isOpen} ref={menuRef}>
      <CloseWrapper onClick={handleMenuToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 30 30" width="30px" height="30px">
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
        </svg>
      </CloseWrapper>
      <NavMobile>
        <NavMobileList>
          <MobileMenuItem>
            <StyledLink to="/games">Games</StyledLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <StyledLink to="/blog">Блог</StyledLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <StyledLink to="/p2b">P2B</StyledLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <StyledLink to="/about">О нас</StyledLink>
          </MobileMenuItem>
        </NavMobileList>
      </NavMobile>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div(
  ({ theme: { colors }, isOpen }) => css`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    pointer-events: ${!isOpen && 'none'};
    opacity: ${isOpen ? '1' : '0'};
    background-color: ${colors.textArea};
  `
);

const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 60px auto 94px;
  text-transform: uppercase;
  font-weight: 700;
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 18px;
  right: 24px;
`;

const NavMobileList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

const MobileMenuItem = styled.li(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;

    &:not(:last-child) {
      &::after {
        width: 3px;
        height: 3px;
        margin: 16px auto 19px;
        content: '';
        border-radius: 50%;
      }
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
      font-size: ${fontSize.md};
    }
  `
);
