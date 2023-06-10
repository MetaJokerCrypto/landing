import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';

const AboutBlock = () => (
  <>
    <Heading type="h2">Наши партнеры</Heading>
    <PartnersWrapper>
      <li>
        <PartnerLink href="https://creativesociety.com/ru/proyekt-sozidatelnoye-obshchestvo" target="_blank">
          Мировое Созидательное Сообщество
        </PartnerLink>
      </li>
      <li>
        <PartnerLink href="https://www.kucoin.com/" target="_blank">
          KuCoin
        </PartnerLink>
      </li>
      <li>
        <PartnerLink href="https://ton.org/" target="_blank">
          TON
        </PartnerLink>
      </li>
    </PartnersWrapper>
    <RegularText customStyles={customHighlightStyles}>
      <span>Присоединяйся к нашему проекту, смело связывайтесь с нами jokerofcrypto@gmail.com либо через Телеграм</span>
    </RegularText>
  </>
);

export default AboutBlock;

const PartnersWrapper = styled.ul(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 0;
    list-style: none;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  `
);

const PartnerLink = styled.a(
  ({ theme: { colors, fontSize } }) => css`
    color: ${colors.white};
    font-size: ${fontSize.md};
    text-decoration: none;
    transition: all 0.4ms;

    &:hover {
      color: ${colors.lightBlue};
    }
  `
);

const customHighlightStyles = () => css`
  margin-bottom: 6rem;
  color: #fcf6a9c7;
  font-weight: 600;
`;
