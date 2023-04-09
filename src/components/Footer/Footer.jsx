import React from 'react';

import { Wrapper, LinksList, LinkItem } from './styled';

const Footer = () => (
  <Wrapper>
    <LinksList>
      <LinkItem>Discord</LinkItem>
      <LinkItem>Telegram</LinkItem>
      <LinkItem>Twitter</LinkItem>
      <LinkItem>OpenSea</LinkItem>
    </LinksList>
    <span>© Meta Joker 2022</span>
  </Wrapper>
);

export default Footer;
