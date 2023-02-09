import styled, { css } from 'styled-components'

export const PartnersWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
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
  color: #fcf6a9c7;
  font-weight: 600;
`;
