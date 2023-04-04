import React from 'react';
import { Link } from 'gatsby';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';
import Button from 'components/Button/Button';

import stars from 'images/stars.svg';

import { data } from 'data/mainBlockData';

import { Wrapper, MainTextWrapper, HeadingWrapper, StyledText, customButtonStyles } from './styled';

const MainBlock = () => {
  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading type="h2">АКТИВИРУЙ СВОЙ ДАР ГЕНИАЛЬНОСТИ</Heading>
          <Heading type="h2">
            РАСКРЫВАЙ ПОТЕНЦИАЛ ИНТЕЛЛЕКТА ВМЕСТЕ С NFT-ТАЛИСМАНОМ <StyledText>META JOKER</StyledText>
          </Heading>
        </HeadingWrapper>
        <div>
          <img src={stars} />
        </div>
      </Wrapper>
      <MainTextWrapper>
        {data.map((item, i) => {
          return <RegularText key={i}>{item}</RegularText>;
        })}
      </MainTextWrapper>
      <Link to="/collection">
        <Button customStyles={customButtonStyles} isStartBtn>
          Начать игру!
        </Button>
      </Link>
    </>
  );
};

export default MainBlock;
