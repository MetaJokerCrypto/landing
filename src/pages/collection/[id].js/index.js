import * as React from 'react';

import { navigate } from "gatsby";
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import card1 from 'images/card-sm-1.png'
import RegularText from 'components/Text/RegularText';

import Layout from 'components/Layout/Layout';

import { Section, Number, Title, CardWrapper, Image, Content } from 'styles/pages/collectionCard'

const CollectionCardPage = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Layout>
          <Section>
            <button onClick={() => navigate(-1)}>Назад</button>
            <Number>1</Number>
            <Title>Материальный</Title>
            <CardWrapper>
              <Image src={card1} />
              <Content>
                <RegularText>Местоположение: центр - позвоночник, крестец, копчик. Мантра ЛАМ.</RegularText>
                <RegularText>Звук - ДО. Цвет - красный. Запах - розы. Вкус - сладкий. Ощущение - горячее покалывание</RegularText>
                <RegularText>Ответственна: за выживание, ядро личности, Жизненную силу организма тела физического</RegularText>
                <RegularText>Муладхару еще называют корневой чакрой. Она связывает человека с Землёй, как и растения через корень связаны с ней</RegularText>
                <RegularText> Эта чакра наполняет человека энергией и обеспечивает его Жизненными силами</RegularText>
              </Content>
            </CardWrapper>
          </Section>
        </Layout>
    </ThemeProvider>
  );
};

export default CollectionCardPage;
