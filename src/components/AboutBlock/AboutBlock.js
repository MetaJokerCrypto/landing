import React from 'react'

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';

import {
  PartnersWrapper,
  PartnerLink,
  customHighlightStyles
} from './styled';

const AboutBlock = () => {
  return (
    <>
      <Heading type="h2">Наши партнеры</Heading>
      <PartnersWrapper>
        <PartnerLink href="https://creativesociety.com/ru/proyekt-sozidatelnoye-obshchestvo" target="_blank">
          Мировое Созидательное Сообщество
        </PartnerLink>
        <PartnerLink href="https://www.kucoin.com/" target="_blank">
          KuCoin
        </PartnerLink>
        <PartnerLink href="https://ton.org/" target="_blank">
          TON
        </PartnerLink>
      </PartnersWrapper>
      <RegularText customStyles={customHighlightStyles}>
        Присоединяйся к нашему проекту, смело связывайтесь с нами jokerofcrypto@gmail.com либо через Телеграм
      </RegularText>
    </>
  )
}

export default AboutBlock
