import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

export const Section = styled.section`
  margin-bottom: 5rem;
`;

export const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.purple};
  `
);
