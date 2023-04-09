import React from 'react';

import Heading from 'components/Text/Heading';

import stars from 'images/stars.svg';

import { Wrapper, HeadingWrapper, StarsImage, StyledText, customHeadingStyles } from './styled';

const MainBlock = () => (
  <Wrapper>
    <HeadingWrapper>
      <Heading type="h2" customStyles={customHeadingStyles}>
        АКТИВИРУЙ СВОЙ ДАР ГЕНИАЛЬНОСТИ
      </Heading>
      <Heading type="h2" customStyles={customHeadingStyles}>
        РАСКРЫВАЙ ПОТЕНЦИАЛ ИНТЕЛЛЕКТА ВМЕСТЕ С NFT-ТАЛИСМАНОМ
        <StyledText> META JOKER</StyledText>
      </Heading>
    </HeadingWrapper>
    <div>
      <StarsImage src={stars} alt="string" />
    </div>
  </Wrapper>
);

export default MainBlock;
