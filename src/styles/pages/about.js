import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const DotList = styled.ul(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.sm};
    line-height: 1.4rem;
  `
);

export const NumberList = styled.ul(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.sm};
    line-height: 1.4rem;
  `
);

export const ListItem = styled.li`
  margin-bottom: 0.6rem;
`;
