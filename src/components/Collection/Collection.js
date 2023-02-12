import * as React from 'react';
import  { Link } from 'gatsby'

import Heading from 'components/Text/Heading';

import card1 from 'images/card-sm-1.png'
import card2 from 'images/card-sm-2.png'
import card3 from 'images/card-sm-3.png'
import card4 from 'images/card-sm-4.png'
import card5 from 'images/card-sm-5.png'
import card6 from 'images/card-sm-6.png'
import card7 from 'images/card-sm-7.png'

import {
  CardsWrapper,
  Card,
  CardImg,
  Button,
  StyledLink

} from './styled';

const cardData = [
  {
    id: '1',
    src: card1,
    color: '#d41717',
    path: '/collection/1'
  },
  {
    id: '2',
    src: card2,
    color: '#c76a00',
    path: '/collection/2'
  },
  {
    id: '3',
    src: card3,
    color: '#d1b500',
    path: '/collection/3'
  },
  {
    id: '4',
    src: card4,
    color: '#02b32e',
    path: '/collection/3'
  },
  {
    id: '5',
    src: card5,
    color: '#0aa6a6',
    path: '/collection/4'
  },
  {
    id: '6',
    src: card6,
    color: '#092e94',
    path: '/collection/5'
  },
  {
    id: '7',
    src: card7,
    color: '#500573',
    path: '/collection/6'
  }
]


const Collection = () => {
  return (
    <>
      <Heading>Коллекция</Heading>
      <CardsWrapper>
        {cardData.map(({ id, src, color, path }) => {
          return (
            <div key={id}>
              <StyledLink to={path}>
                <Card>
                  <CardImg src={src} />
                  <Button color={color}>Детальней</Button>
                </Card>
              </StyledLink>
            </div>
          )
        })}
      </CardsWrapper>
    </>
  );
};

export default Collection;
