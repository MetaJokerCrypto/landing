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

  return (
    <>
      <CardWrapper>
        <Image src={data?.image} />
        <div>
          <TitleWrapper>
            <Number>{data?.id}</Number>
            <span>{data?.name}</span>
          </TitleWrapper>
          {data?.description.map(item => {
            return (
              <RegularText>{item}</RegularText>
            )
          })}
        </div>
      </CardWrapper>
      <ButtonWrapper>
        <a href={data?.openSeaLink}>
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
