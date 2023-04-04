import styled, { css } from 'styled-components';

import red from 'images/red-c.svg';
import orange from 'images/orange-c.svg';
import yellow from 'images/yellow-c.svg';
import green from 'images/green-c.svg';
import blue from 'images/light-blue-c.svg';
import purple from 'images/purple-c.svg';

const handleIconType = (position) => {
  switch (position) {
    case '1':
      return red;
    case '2':
      return orange;
    case '3':
      return yellow;
    case '4':
      return green;
    case '5':
      return blue;
    case '6':
      return purple;
    default:
      return '#fff';
  }
};

export const Wrapper = styled.div`
  z-index: 1;
  position: relative;
`;

export const Title = styled.div(
  ({ theme: { fontSize } }) => css`
    margin: 2rem 0;
    font-size: ${fontSize.lg};
    font-family: 'Merriweather', serif;
  `
);

export const Date = styled.div(
  ({ theme: { colors, fontSize } }) => css`
    font-size: ${fontSize.lg};
    font-family: 'Merriweather', serif;
    color: ${colors.purple};
  `
);

export const Event = styled.div(
  ({ position }) => css`
    position: relative;
    /* max-width: 45rem; */
    padding: 1.5rem;
    margin: 3.75rem 0 0 4rem;
    border: 1px solid white;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;

    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: -5.3rem;
      width: 2.5rem;
      height: 2.5rem;
      background: url(${() => handleIconType(position)});
      background-size: 2.5rem 2.5rem;
      background-repeat: no-repeat;
    }
  `
);

export const Content = styled.div(
  ({ theme: { colors } }) => css`
    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: ${colors.white};
      margin: 0.6rem 0;
    }

    @media (min-width: 55rem) {
      width: 60%;
      margin: 0 auto;
    }
  `
);
