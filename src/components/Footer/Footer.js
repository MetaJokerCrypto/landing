import React from 'react';

import { Wrapper, Copyright, Socials, SocialItem } from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <span>© Meta Joker 2022</span>
      <Socials>
        <span>Discord</span>
        <span>Telegram</span>
        <span>Twitter</span>
        <span>OpenSea</span>
      </Socials>
    </Wrapper>
  );
};

export default Footer;
