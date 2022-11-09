import styled, { css } from 'styled-components';


export const ButtonWrapper = styled.button(
  ({ theme: { colors }, customStyles }) => css`
    border: none;
    outline: none;
    cursor: pointer;
    ${customStyles}
  `,
);
