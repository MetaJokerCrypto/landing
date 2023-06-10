import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'components/Text/Heading';

import mainJoker from 'images/joker_main.jpg';

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
      <JokerImage src={mainJoker} alt="Joker main image" />
    </div>
  </Wrapper>
);

export default MainBlock;

const Wrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  `
);

const StyledText = styled.span(
  ({ theme: { colors } }) => css`
    text-transform: uppercase;
    font-style: italic;
    color: ${colors.purple};
  `
);

const HeadingWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 45rem;
    margin-right: 3rem;
    text-align: center;
    line-height: 3.7rem;

    @media (max-width: ${breakpoints.md}) {
      margin: 0;
    }
  `
);

const CustomHeading = styled(Heading)`
  text-transform: uppercase;
`;

const JokerImage = styled.img`
  width: 100%;
  max-width: 22rem;
`;

const customHeadingStyles = ({ theme: { breakpoints, fontSize } }) => css`
  font-size: ${fontSize.xl};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${fontSize.lg};
  }
`;
