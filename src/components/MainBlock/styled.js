import styled, { css } from 'styled-components';
import Heading from 'components/Text/Heading';

export const Wrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  `
);

export const StyledText = styled.span(
  ({ theme: { colors } }) => css`
    text-transform: uppercase;
    font-style: italic;
    color: ${colors.purple};
  `
);

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 45rem;
  text-align: center;
  line-height: 3.7rem;
`;

export const CustomHeading = styled(Heading)`
  text-transform: uppercase;
`

export const PartnersWrapper = styled.div`
  display: flex;
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

export const StarsImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const customHighlightStyles = ({ theme: { colors } }) => css`
  font-weight: 600;
  color: ${colors.accentColor};
`;

export const customHeadingStyles = ({ theme: { breakpoints, fontSize } }) => css`
  font-size: ${fontSize.xl};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${fontSize.lg};
  }
`;
