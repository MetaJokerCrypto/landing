import React from 'react';
import styled, { css } from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <List>
        <Item>
          <Link href="https://discord.com/invite/b7eTbguakZ" target="_blank">
            Discord
          </Link>
        </Item>
        <Item>
          <Link href="/">Telegram</Link>
        </Item>
        <Item>
          <Link href="https://twitter.com/MetaJoker777" target="_blank">
            Twitter
          </Link>
        </Item>
        <Item>
          <Link href="https://opensea.io/collection/metajoker777" target="_blank">
            OpenSea
          </Link>
        </Item>
      </List>
      <span>© Meta Joker {currentYear}</span>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div(
  ({ theme: { breakpoints, colors } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding: 2rem 5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    background-color: ${colors.footer};

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  `
);

const List = styled.ul(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    padding: 0;
    list-style-type: none;
    margin-bottom: 0;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
      margin-bottom: 40px;
    }
  `
);

const Item = styled.li(
  ({ theme: { breakpoints } }) => css`
    &:not(:last-child) {
      margin-right: 40px;
    }

    @media (max-width: ${breakpoints.md}) {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  `
);

const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.white};
    text-decoration: none;
  `
);
