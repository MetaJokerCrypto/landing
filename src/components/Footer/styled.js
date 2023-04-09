import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { breakpoints, colors } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding: 2rem 5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    background-color: ${colors.footer};

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  `
);

export const LinksList = styled.ul(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    padding: 0;
    list-style-type: none;
    margin-bottom: 0;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
      margin-bottom: 40px;
    }
  `
);

export const LinkItem = styled.li(
  ({ theme: { breakpoints } }) => css`
    &:not(:last-child) {
      margin-right: 40px;
    }

    @media (max-width: ${breakpoints.md}) {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  `
);
