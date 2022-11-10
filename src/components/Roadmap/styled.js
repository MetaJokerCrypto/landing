import styled, { css } from 'styled-components';

import red from 'images/red-c.svg';
import orange from 'images/orange-c.svg';
import yellow from 'images/yellow-c.svg';
import green from 'images/green-c.svg';
import blue from 'images/light-blue-c.svg';
import purple from 'images/purple-c.svg';

const handleIconType = position => {
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
      return "#fff";
  }
};

export const Block = styled.div(
  ({ theme: { colors } }) => css`
    z-index: 1;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: ${colors.white};
      left: 50%;
      margin: 0.6rem 0;
    }

    @media (max-width: 75rem) {
      margin-left: 4rem;
      &:before {
        left: 0;
      }
    };

    @media (max-width: 55rem) {
      margin-left: 0;
    };
  `
);

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
  ({ theme: { colors }, position }) => css`
    position: relative;
    max-width: 32.5rem;
    padding: 1.5rem;
    margin: 3.75rem 1rem;
    border: 1px solid white;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;

    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: -3.6rem;
      width: 2.5rem;
      height: 2.5rem;
      background: url(${({ position }) => handleIconType(position)});
      background-size: 2.5rem 2.5rem;
      background-repeat: no-repeat;
    }

    &:nth-child(odd) {
      margin-left: calc(50% + 2.4rem);
      width: 100%;
    }

    &:nth-child(even) {
      margin-left: calc(50% - 35rem);
      &:before {
        left: calc(100% + 1.4rem);
      }
    }

    @media (max-width: 75rem) {
      &:nth-child(odd) {
        margin-left: 2.4rem;
      };

      &:nth-child(even) {
        margin-left: 1.7rem;
        &:before {
          left: -3rem;
        };
      };
    };
  `
);
