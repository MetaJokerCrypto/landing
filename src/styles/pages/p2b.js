import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 3rem;
`;

export const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.purple};
  `
);
