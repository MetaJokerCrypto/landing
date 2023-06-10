import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, customStyles }) => <ButtonWrapper customStyles={customStyles}>{children}</ButtonWrapper>;

export default Button;

export const ButtonWrapper = styled.button(
  ({ customStyles }) => css`
    border: none;
    outline: none;
    cursor: pointer;

    ${customStyles}
  `
);
