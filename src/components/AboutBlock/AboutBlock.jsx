import React from 'react';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';

import { PartnersWrapper, PartnerLink, customHighlightStyles } from './styled';

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
