import * as React from 'react';

import Heading from 'components/Text/Heading';

import { data } from 'data/cardsData';

import { CardsWrapper, Card, CardImg, Button, StyledLink } from './styled';

const Collections = () => {
  return (
    <>
      <Heading>Коллекция</Heading>
      <CardsWrapper>
        {data.map(({ id, previewImage, color, path }) => {
          return (
            <div key={id}>
              <StyledLink to={path}>
                <Card>
                  <CardImg src={previewImage} />
                  <Button color={color}>Детальней</Button>
                </Card>
              </StyledLink>
            </div>
          );
        })}
      </CardsWrapper>
    </>
  );
};

export default Collections;
