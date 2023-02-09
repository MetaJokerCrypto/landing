import styled, { css } from 'styled-components';
import Heading from 'components/Text/Heading';

export const StyledText = styled.span(
  ({ theme: { colors } }) => css`
    font-style: italic;
    color: ${colors.purple};
  `
);

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 10rem;
`;

export const MainHeading = styled(Heading)`
  font-size: 10rem;
`;

export const MainWrapper = styled.div`
  max-width: 60rem;
  display: flex;
  gap: 3rem;

  @media (max-width: 75rem) {
    flex-direction: column;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3.7rem;
`;

export const StarsImage = styled.div``;

export const MainTextWrapper = styled.div`
  width: 100%;
  align-items: start;
  margin: 10rem 0 0;
`;

// export const PartnersWrapper = styled.div`
//   display: flex;
//   gap: 2rem;
//   margin-bottom: 4rem;
// `;

// export const PartnerLink = styled.a(
//   ({ theme: { colors, fontSize } }) => css`
//     color: ${colors.white};
//     font-size: ${fontSize.md};
//     text-decoration: none;
//     transition: all 0.4ms;

//     &:hover {
//       color: ${colors.lightBlue};
//     }
//   `
// );

// export const customButtonStyles = ({ theme: { colors, fontSize } }) => css`
//   padding: 0.8em 2.5em;
//   margin-top: 2rem;
//   font-size: ${fontSize.md};
//   font-weight: 700;
//   color: ${colors.white};
//   border-radius: 2rem;
//   background: linear-gradient(217deg, rgb(255 153 255) 0%, rgb(9 73 122 / 73%) 62%);
//   opacity: 0.9;
//   &:hover {
//     opacity: 1;
//   }
// `;

// export const customHighlightStyles = ({ theme: { colors } }) => css`
//   color: #fcf6a9c7;
//   font-weight: 600;
// `;
