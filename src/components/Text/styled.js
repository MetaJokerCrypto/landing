import styled, { css } from 'styled-components';

export const P = styled.span(
  ({ theme: { colors, fontSize }, customStyles }) => css`
    font-size: ${fontSize.sm};
    line-height: 1.6;
    color: ${colors.lightGray};

    ${customStyles};
  `
);

export const H1 = styled.h1(
  ({ theme: { fontSize }, customStyles }) => css`
    font-size: ${fontSize.xxl};
    line-height: 1.3;
    text-transform: uppercase;

    ${customStyles}
  `
);

export const H2 = styled.h2(
  ({ theme: { fontSize }, customStyles }) => css`
    font-size: ${fontSize.xl};
    margin-bottom: 2rem;
    text-transform: uppercase;

    ${customStyles}
  `
);
