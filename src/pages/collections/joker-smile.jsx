import * as React from 'react';
import SEO from 'components/SEO/SEO';

import styled, { ThemeProvider, css } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';
import Layout from 'components/Layout/Layout';

const JokerSmilePage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout width="70" noFooter>
      <Wrapper>
        <Heading type="h1">Joker-Smile</Heading>
        <Section plain>
          <RegularText>
            Joker Smile - ускоренный и эффективный способ пробуждения в себе спящих качеств Совершеннего Человека.
          </RegularText>
          <RegularText>
            Прямо сейчас перед Вами раскрывается основополагающая мистерия самосовершенствования. Для революционного
            ускорения своей Личностной эволюции следует ВСЕГДА улыбаться и намеренно улыбкой удерживай уровень позитива
            в своем сознании на отметке “уверенная счастливость”! В этом бодром и Благородном состоянии Души, приступай
            к освоению трех правил моей игры Joker Smile.
          </RegularText>
          <RegularText>
            В этом бодром и Благородном состоянии Души, приступай к освоению трех правил моей игры Joker Smile.
          </RegularText>
        </Section>
        <Heading>Правила Игры</Heading>
        <NumberBlock>
          <Number>1</Number>
          <Section>
            <RegularText>
              Повторяй эту формулу, осознанно отдавая приказ пространству, мысленно или вслух, 7 раз подряд.
            </RegularText>
            <RegularText>
              Делай это ИСКЛЮЧИТЕЛЬНО каждый день после пробуждения, пока твое Сознание чисто. Повторяй играючи, без
              напряжения.
            </RegularText>
            <RegularText>
              Программируй себя на гармоничный резонанс с Жизнью и Миром. Без обязательного и систематического
              выполнения этого правила Код Гения НЕ активируется!
            </RegularText>
          </Section>
        </NumberBlock>
        <NumberBlock>
          <Number>2</Number>
          <Section>
            <RegularText>
              Каждый из NFT-талисманов держи у себя не более 7 недель. Когда определишь его ценность и цену, перепродай
              другому, но продолжай применять эту формулу успеха в жизни.
            </RegularText>
            <RegularText>
              Задача состоит в том, чтобы став поочередно владельцем всех мета-талисманов, гармонизировать в себе все
              семь энергоцентров и активировать Шишковидную железу, расширив сознание - стать просветленным - Человеком
              Разумным.
            </RegularText>
          </Section>
        </NumberBlock>
        <NumberBlock>
          <Number>3</Number>
          <Section>
            <RegularText>Продай талисман за новый актив (например, купил за ETH - продал за MATIC).</RegularText>
            <RegularText>
              В цене продажи сохрани символ ясного Сознания и успеха, любимое число Фортуны - число 7.
            </RegularText>
          </Section>
        </NumberBlock>
        <Heading>Nota Bene</Heading>
        <Section plain>
          <RegularText>
            Вне зависимости от вашего желания поделиться Удачей, продавая сам NFT-талисман Вы обязаны получить выгоду,
            но не убыток (духовную, интеллектуальную или финансово-материальную).
          </RegularText>
          <RegularText>Удача работает только при соблюдении золотого правила Нравственности:</RegularText>
        </Section>
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/bC2tV0-vPU0?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </VideoWrapper>
      </Wrapper>
    </Layout>
  </ThemeProvider>
);

export default JokerSmilePage;

export const Head = () => <SEO />;

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

const NumberBlock = styled.div`
  display: flex;
`;

const Section = styled.section(
  ({ theme: { colors }, plain }) => css`
    margin-bottom: 5rem;
    padding: ${!plain ? '1.2rem 2rem 0.7rem' : ''};
    border-radius: 1rem;
    background-color: ${!plain ? colors.textArea : ''};
  `
);

const Number = styled.div(
  ({ theme: { colors, fontSize } }) => css`
    margin: 2rem 2rem 0 0;
    color: ${colors.lightBlue};
    font-size: ${fontSize.xxl};
    font-weight: 700;
  `
);

const VideoWrapper = styled.div`
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
