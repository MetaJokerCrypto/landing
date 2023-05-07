import * as React from 'react';

import RegularText from 'components/Text/RegularText';
import Button from 'components/Button/Button';

import { TitleWrapper, Title, Image, CardWrapper, ButtonWrapper, customButtonStyles } from './styled';

const CollectionCard = ({ data }) => (
  <>
    <CardWrapper>
      <Image src={data?.image} />
      <div>
        <TitleWrapper>
          <Title>{data?.id} - {data?.name}</Title>
        </TitleWrapper>
        {data?.description.map((item) => (
          <RegularText>{item}</RegularText>
        ))}
        <ButtonWrapper>
          <a href={data?.openSeaLink}>
            <Button customStyles={customButtonStyles}>Начать игру!</Button>
          </a>
          <span>Кликни чтобы начать Играть Миром Подробности в скрытом контенте NFT</span>
        </ButtonWrapper>
      </div>
    </CardWrapper>
  </>
);

export default CollectionCard;
