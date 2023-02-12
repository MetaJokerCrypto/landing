import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  height: 100vh;
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 3rem;
`

export const ListWrapper = styled.div`
  display: flex;
  gap: 3rem;
`

export const Game = styled.div(
  ({ theme: { fontSize, colors }, active }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    height: 6rem;
    padding: 1 0.5rem;
    font-size: ${fontSize.md};
    border-radius: 0.2rem;
    background-color: ${active ? colors.lightBlue : colors.gray};
  `
)

export const GameTitle = styled.span(
  ({ theme: { colors }  }) => css`
    color: ${colors.white}
  `
)

export const StyledLink = styled(Link)`
  text-decoration: none;
`
