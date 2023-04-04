import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Layout from 'components/Layout/Layout';

import { Wrapper, ListWrapper, Game, GameTitle, StyledLink } from 'styles/pages/games';

const GamesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Wrapper>
          <ListWrapper>
            <StyledLink to="/games/joker-smile">
              <Game active>
                <GameTitle>Joker Smile</GameTitle>
              </Game>
            </StyledLink>
            <Game>
              <GameTitle>Coming soon...</GameTitle>
            </Game>
          </ListWrapper>
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default GamesPage;
