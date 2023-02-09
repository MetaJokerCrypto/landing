import styled, { css } from 'styled-components';

export const P = styled.p(
  ({ customStyles }) => css`
    line-height: 1.6;
    ${customStyles};
  `
);

export const H1 = styled.h1(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.xxl};
    line-height: 1.3;
  `
);

export const H2 = styled.h2(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.xl};
    margin-bottom: 2rem;
  `
);
