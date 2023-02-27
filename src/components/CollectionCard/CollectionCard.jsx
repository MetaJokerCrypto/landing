import * as React from 'react';

import RegularText from 'components/Text/RegularText';
import Button from 'components/Button/Button';

import {
  TitleWrapper,
  Number,
  Image,
  CardWrapper,
  ButtonWrapper,
  customButtonStyles
} from './styled';

const Collections = ({ data }) => {
  const { id, name, image, description, openSeaLink } = data
  return (
    <>
      <CardWrapper>
        <Image src={image} />
        <div>
          <TitleWrapper>
            <Number>{id}</Number>
            <span>{name}</span>
          </TitleWrapper>
          {description.map(item => {
            return (
              <RegularText>{item}</RegularText>
            )
          })}
        </div>
      </CardWrapper>
      <ButtonWrapper>
        <a href={openSeaLink}>
          <Button customStyles={customButtonStyles}>
            Начать игру!
          </Button>
        </a>
        <span>Кликни чтобы начать Играть Миром Подробности в скрытом контенте NFT</span>
      </ButtonWrapper>
    </>
  );
};

export default Collections;
