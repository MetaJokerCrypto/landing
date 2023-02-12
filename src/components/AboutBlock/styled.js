import styled, { css } from 'styled-components'

export const PartnersWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 0;
  list-style: none;
`;

export const PartnerLink = styled.a(
  ({ theme: { colors, fontSize } }) => css`
    color: ${colors.white};
    font-size: ${fontSize.md};
    text-decoration: none;
    transition: all 0.4ms;

    &:hover {
      color: ${colors.lightBlue};
    }
  `
);

export const customHighlightStyles = ({ theme: { colors } }) => css`
  margin-bottom: 6rem;
  color: #fcf6a9c7;
  font-weight: 600;
`;
