import React from 'react';
import styled, { css } from 'styled-components';

const Heading = ({ children, type, customStyles }) => (
  type === 'h1' ? <H1 customStyles={customStyles}>{children}</H1> : <H2 customStyles={customStyles}>{children}</H2>
);

export default Heading;

const H1 = styled.h1(
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

const H2 = styled.h2(
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
