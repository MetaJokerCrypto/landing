import * as React from 'react';

import { data } from 'data/cardsData';

import { SliderCardsWrapper, SliderCard, Button, StyledLink, CardImage } from './styled';

const Collections = () => (
  <SliderCardsWrapper>
    {data.map(({ id, previewImage, color, path }) => (
      <StyledLink to={path} key={id}>
        <SliderCard>
          <CardImage src={previewImage} />
          <Button color={color}>Детальней</Button>
        </SliderCard>
      </StyledLink>
    ))}
  </SliderCardsWrapper>
);

export default Collections;
