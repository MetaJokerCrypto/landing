import styled, { css } from 'styled-components';

export const P = styled.p(
  ({ customStyles }) => css`
    line-height: 1.6;
    ${customStyles};
  `
)

export const H1 = styled.h1(
  ({ theme: { colors, fontSize }}) => css`
    font-size: ${fontSize.xl};
    line-height: 1.3;
  `
);

export const H2 = styled.h2(
  ({ theme: { colors, fontSize }}) => css`
    font-size: ${fontSize.lg};
    margin-bottom: 2rem;
  `
);
