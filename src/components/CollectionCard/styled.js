import styled, { css } from 'styled-components';

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 46px;
  font-weight: 700;
`;

export const Number = styled.span`
  margin-right: 1.5rem;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 453px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 5rem;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const customButtonStyles = ({ theme: { colors, fontSize } }) => css`
  width: 15rem;
  padding: 0.8em 2.5em;
  font-size: ${fontSize.md};
  font-weight: 700;
  color: ${colors.white};
  border-radius: 2rem;
  background: linear-gradient(217deg, rgb(255 153 255) 0%, rgb(9 73 122 / 73%) 62%);
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
