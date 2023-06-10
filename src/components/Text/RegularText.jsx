import React from 'react';
import styled, { css } from 'styled-components';

const RegularText = ({ children, customStyles }) => <P customStyles={customStyles}>{children}</P>;

export default RegularText;

export const P = styled.p(
  ({ theme: { colors, fontSize }, customStyles }) => css`
    font-size: ${fontSize.sm};
    line-height: 1.6;
    color: ${colors.lightGray};

    ${customStyles};
  `
);
