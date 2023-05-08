import styled, { css } from 'styled-components';

export const P = styled.p(
  ({ theme: { colors, fontSize }, customStyles }) => css`
    font-size: ${fontSize.sm};
    line-height: 1.6;
    color: ${colors.lightGray};

    ${customStyles};
  `
);

export const H1 = styled.h1(
  ({ theme: { breakpoints, fontSize }, customStyles }) => css`
    margin-bottom: 3rem;
    font-size: ${fontSize.xxl};
    line-height: 1.3;
    text-transform: uppercase;

    @media (max-width: ${breakpoints.md}) {
      font-size: ${fontSize.xl};
    }

    ${customStyles}
  `
);

export const H2 = styled.h2(
  ({ theme: { breakpoints, fontSize }, customStyles }) => css`
    margin-bottom: 2rem;
    font-size: ${fontSize.xl};
    text-transform: uppercase;

    @media (max-width: ${breakpoints.md}) {
      font-size: ${fontSize.lg};
    }

    ${customStyles}
  `
);
