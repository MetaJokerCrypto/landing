import React from 'react';

import { Wrapper, List, Item, Link } from './styled';

const Footer = () => (
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
    <span>© Meta Joker 2022</span>
  </Wrapper>
);

export default Footer;
