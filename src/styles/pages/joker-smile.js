import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

export const NumberBlock = styled.div`
  display: flex;
`;

export const Section = styled.section(
  ({ theme: { colors }, plain }) => css`
    margin-bottom: 5rem;
    padding: ${!plain ? '1.2rem 2rem 0.7rem' : ''};
    border-radius: 1rem;
    background-color: ${!plain ? colors.textArea : ''};
  `
);

export const Number = styled.div(
  ({ theme: { colors, fontSize } }) => css`
    margin: 2rem 2rem 0 0;
    color: ${colors.lightBlue};
    font-size: ${fontSize.xxl};
    font-weight: 700;
  `
);

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  margin-bottom: 3rem;
  padding-bottom: 56%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
