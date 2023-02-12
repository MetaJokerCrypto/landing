import React from 'react';

import { Wrapper, Socials } from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <span>© Meta Joker 2022</span>
      <Socials>
        <li>Discord</li>
        <li>Telegram</li>
        <li>Twitter</li>
        <li>OpenSea</li>
      </Socials>
    </Wrapper>
  );
};

export default Footer;
