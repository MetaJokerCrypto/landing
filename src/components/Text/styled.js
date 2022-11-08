import styled, { css } from 'styled-components';

export const P = styled.p`
  line-height: 1.5;
`

export const H1 = styled.h1(
  ({ theme: { colors, fontSize }}) => css`
    font-size: ${fontSize.xl};
  `
);

export const H2 = styled.h2(
  ({ theme: { colors, fontSize }}) => css`
    font-size: ${fontSize.lg};
  `
);
