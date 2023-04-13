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

export const Wrapper = styled.div(
  ({ theme: { breakpoints, colors } }) => css`
    position: relative;
    width: 60%;
    margin: 0 auto;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: ${colors.white};
      margin: 0.6rem 0;
    }

    @media (max-width: ${breakpoints.md}) {
      width: 100%;
    }
  `
);

export const Title = styled.div(
  ({ theme: { breakpoints, fontSize } }) => css`
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${fontSize.md2};
    font-family: 'Merriweather', serif;

    @media (max-width: ${breakpoints.md}) {
      margin: 1rem 0;
      font-size: ${fontSize.md};
    }
  `
);

export const Date = styled.div(
  ({ theme: { breakpoints, colors, fontSize } }) => css`
    position: absolute;
    top: 40%;
    left: -16rem;
    font-size: ${fontSize.lg};
    font-family: 'Merriweather', serif;
    color: ${colors.white};

    @media (max-width: ${breakpoints.md}) {
      position: static;
      font-size: ${fontSize.md};
    }
  `
);

export const Event = styled.div(
  ({ position, theme: { breakpoints, colors } }) => css`
    position: relative;
    max-width: 35rem;
    padding: 1.5rem;
    margin: 3.75rem 0 0 4rem;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;
    background-color: ${colors.roadmap};
    color: ${colors.white};

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

    @media (max-width: ${breakpoints.md}) {
      max-width: fit-content;
    }

    @media (max-width: ${breakpoints.sm}) {
      margin: 3.75rem 0 0 2rem;

      &:before {
        left: -3.3rem;
      }
    }
  `
);
