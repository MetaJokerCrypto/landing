import React from 'react';

import stars from 'images/stars.svg';

import { Wrapper, HeadingWrapper, StarsImage, StyledText, CustomHeading, customHeadingStyles } from './styled';

const MainBlock = () => (
  <Wrapper>
    <HeadingWrapper>
      <CustomHeading type="h2" customStyles={customHeadingStyles}>
        Активируй свой дар гениальности
      </CustomHeading>
      <CustomHeading type="h2" customStyles={customHeadingStyles}>
        Расскрывай потенциал интеллекта вместе с NFT-талисманом
        <StyledText> meta joker</StyledText>
      </CustomHeading>
    </HeadingWrapper>
    <div>
      <StarsImage src={stars} alt="string" />
    </div>
  </Wrapper>
);

export default MainBlock;
