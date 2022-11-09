import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import Layout from 'components/Layout/Layout';
import Starsfield from 'components/Starsfield/Starsfield';
import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';
import Roadmap from 'components/Roadmap/Roadmap';

import stars from 'images/stars.svg';

import {
  StyledText,
  MainSection,
  MainWrapper,
  StarsImage,
  MainTextWrapper,
  RegularSection,
  GoalSection,
  customButtonStyles,
  customTextStyles,
} from './styled'
import Button from 'components/Button/Button';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Starsfield />
        <Layout>
          <MainSection>
            <MainWrapper>
              <Heading type='h1'>РАСКРЫВАЯ <br/> ИСТИННЫЕ <br/> ВОЗМОЖНОСТИ <br/><StyledText>NFT</StyledText></Heading>
              <StarsImage><img src={stars} /></StarsImage>
            </MainWrapper>
            <MainTextWrapper>
              <RegularText>Переход на WEB 3.0 раскрывает нам настоящий потенциал NFT технологии</RegularText>
              <RegularText>Meta Joker, козырная карта в колоде meta-мира, представляет новый формат NFT игры - Play to Benefit</RegularText>
              <RegularText>Твоя жизнь - не шутка, но она может радостной! Самосовершенствование это игра в которую мы играем Присоединяйся уже сегодня!</RegularText>
            </MainTextWrapper>
            <Button customStyles={customButtonStyles}>Начать игру!</Button>
          </MainSection>
          <RegularSection>
            <Heading type='h2'>ЧТО ТАКОЕ META - JOKER</Heading>
            <RegularText>Золотое Правило Нравственности является основой проекта, выполненного в NFT как P2B игра. Как живой организм, Планета постоянно развивается и совершенствуется во времени. И в настоящий момент Природа открывает нам новый способ развития Человеческой цивилизации, цифровой, который выражен через: Bitcoin, Cryptocurrency, P2B, P2E, NFT, Metaverse, WEB 3.0, VR и прочие.</RegularText>
            <RegularText>P2B (Play-to-Benefit) это ментальный формат игры и взаимоотношений, основанных на Золотом Правиле Нравственности.</RegularText>
            <RegularText>Основная идея P2B заключается в том, что этот Мир - Игра со своими правилами и условностями. Здесь игрок играет со своей собственной Жизнью и Реальностью, трансформируя её в желаемую для себя обстановку и собственную личность, используя "ускорители" предоставляемые P2B играми, чтобы достичь своих жизненных целей кратчайшим путём.</RegularText>
            <RegularText>NFT игра Joker Smile, помимо возможностей NFT как крипто-актива, является талисманом, который служит усилителем навыков и судьбы своего обладателя. Таким образом мы стоим новое общество и новое будущее для нас всех</RegularText>
          </RegularSection>
          <RegularSection>
            <Heading type='h2'>ЦЕЛЬ ПРОЕКТА</Heading>
            <RegularText>Наша миссия и цель это подготовить современного сознательного и стремящегося к познанию себя и мира, какими они являются за завесой формы и материальных качеств, человека к новому витку развития человечества в рамках новой эпохи Водолея. Научить его управлять своим внутренним ресурсом (свойством "творца") для его практического применения в повседневную жизнь.</RegularText>
            <RegularText customStyles={customTextStyles}>Познать то, что нельзя осязать, обонять, ощутить на вкус, услышать ухом и увидеть глазом.</RegularText>
            <RegularText>Каждый талисман призван развить в человеке спящие качества ждущие своего пробуждения и использовании в нашей жизни, и построить характер своего обладателя, который неизбежно ведет его к Успеху, дорогой Удачи, ведущей к Процветанию.</RegularText>
          </RegularSection>
          <RegularSection>
            <Heading type='h2'>ROADMAP</Heading>
            <RegularText>Основные этапы развития, которые мы для себя ставим на данный момент. У нас в планах ещё много новаторских проектов, и здесь мы представили ближайшие шаги.</RegularText>
            <Roadmap />
          </RegularSection>
          <RegularSection>
            <Heading type='h2'>НАША КОМАНДА</Heading>
            <RegularText>Наша команда вовлечена в создании нового формата, который в полной мере демонстрирует и раскрывает возможности NFT. Скоро каждый сможет увидеть наше детище во всей своей красе.</RegularText>
          </RegularSection>
          <RegularSection>
            <Heading type='h2'>ТВОРИ ДОБРО</Heading>
            <RegularText>50% прибыли от реализованных NFT нашего проекта идут на создание мира, спасение жизни людей, пострадавших от военных действий в Украине, а также на восстановление жизненно-важной инфраструктуры</RegularText>
          </RegularSection>
          <RegularSection>
            <Heading type='h2'>НАШИ ПАРТНЕРЫ</Heading>
            <RegularText>Если вы заинтересованы присоедениться к нашему проекту, смело связывайтесь с нами jokerofcrypto@gmail.com либо через Телеграм</RegularText>
          </RegularSection>
        </Layout>
    </ThemeProvider>
  );
};

export default Index;
