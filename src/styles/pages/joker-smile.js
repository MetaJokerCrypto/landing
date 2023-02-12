import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 3rem;
`

export const Number = styled.div(
  ({ theme: { colors, fontSize } }) => css`
    margin: 2rem 0;
    color: ${colors.purple};
    font-size: ${fontSize.lg};
    text-align: center;
  `
)
