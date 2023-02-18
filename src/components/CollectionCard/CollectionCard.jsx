import * as React from 'react';

import RegularText from 'components/Text/RegularText';

import {
  TitleWrapper,
  Number,
  Image,
  CardWrapper,
  Content
} from './styled';

const Collections = ({ data }) => {
  const { id, name, image, description } = data
  return (
    <>
      <CardWrapper>
        <Image src={image} />
        <Content>
          <TitleWrapper>
            <Number>{id}</Number>
            <span>{name}</span>
          </TitleWrapper>
          {description.map(item => {
            return (
              <RegularText>{item}</RegularText>
            )
          })}
        </Content>
      </CardWrapper>
    </>
  );
};

export default Collections;
