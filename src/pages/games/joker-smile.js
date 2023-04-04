import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';
import Layout from 'components/Layout/Layout';

import { Wrapper, Number } from 'styles/pages/joker-smile';

const JokerSmilePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout width="70" noFooter>
        <Wrapper>
          <RegularText>
            Этот, ускоренный и эффективный способ пробуждения в себе спящих качеств Человека Совершеннего, который
            выражен в NFT мета игре Joker-Smile
          </RegularText>
          <RegularText>
            И так, пристегните покрепче ремни, дорогие Друзья, мы взлетаем на высшие уровни эволюции Сознания! Здесь и
            сейчас перед Вами раскрывается основополагающая мистерия самосовершенствования, которая говорит нам о том,
            что для революционного ускорения своей Личностной эволюции следует всегда, - запомни мой Друг, это важно!
            ВСЕГДА, - улыбаться и намеренно улыбкой удерживай уровень позитива в своем сознании на отметке “уверенная
            счастливость”!
          </RegularText>
          <RegularText>
            И вот, именно в этом бодром и Благородном состоянии Души, приступай к освоению, достаточно простых, трех
            правил моей игры Joker Smile:
          </RegularText>
          <Heading>Правила Игры</Heading>
          <Number>1</Number>
          <RegularText>
            Повторяй эту формулу, как принятое решение и приказ пространству, мысленно или вслух, 7 раз подряд. Делай
            это ИСКЛЮЧИТЕЛЬНО каждый день после пробуждения, пока твое Сознание чисто. Повторяй играючись, без
            напряжения, просто программируй себя на гармоничный резонанс с Жизнью и Миром
          </RegularText>
          <RegularText>
            PS. Без обязательного и систематического выполнения этого правила Код Гения НЕ активируется!
          </RegularText>
          <Number>2</Number>
          <RegularText>
            Каждый из NFT-талисманов держи у себя не более 7 недель, и определив его ценность и цену, перепродай
            другому, но формулу успеха продолжай применять, - она с тобой даже после активации Сознания.
          </RegularText>
          <RegularText>
            Задача состоит в том, чтобы став поочередно владельцем всех мета-талисманов, гармонизировать в себе все семь
            энергоцентров и активировать Шишковидную железу, расширив сознание - стать просветленным Человеком Разумным
          </RegularText>
          <Number>3</Number>
          <RegularText>В цене продажи сохрани любимое число Фортуны 7, - символ ясного Сознания и успеха.</RegularText>
          <RegularText>
            Продажу же производим за отличный актив от того, за который ты приобрел (купил за ETH - продал за ETH - нет;
            купил за ETH - продал за MATIC - да)
          </RegularText>
          <Heading>Nota Bene</Heading>
          <RegularText>
            Вне зависимости от того насколько сильно Вы желаете поделиться Удачей, продавая сам NFT-талисман Вы обязаны
            получить выгоду, но не убыток (духовную, интеллектуальную или финансово-материальную)
          </RegularText>
          <RegularText>
            Искреннее намерение делиться Удачей с другими и безусловная Вера в то, что Вы и есть Источник Успеха; Удача
            работает только при соблюдении
          </RegularText>
          <RegularText>Золотого правила Нравственности:</RegularText>
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/bC2tV0-vPU0&list=WL&index=3"
            frameborder="0"
            allowfullscreen></iframe>
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default JokerSmilePage;
