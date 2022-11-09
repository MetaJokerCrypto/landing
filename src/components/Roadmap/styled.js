import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Block = styled.div(
  ({ left }) => css`
    position: relative;
    max-width: 35rem;
    margin: 2rem 0;
  `
);

export const Content = styled.div`
  position: relative;
  margin-left: 60px;
  background: #99cced;
  border-radius: 0.2rem;
  padding: 1rem;
  color: black;
`

export const Circle = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #9c89ff;
`;

export const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  width: 2px;
  height: 100%;
  position: relative;
  padding: 2rem 0;
  margin: 2rem 0;
  background: #7E57C2;

  /* &::before {
  content: '';
  background: #7E57C2;
} */
`;
