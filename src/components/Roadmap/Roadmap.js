import React from 'react';

import RegularText from 'components/Text/RegularText';

import { Wrapper, Content, Event, Date, Title } from './styled';

const Roadmap = () => {
  return (
    <Wrapper>
      <Content>
        <Event position="1">
          <Date>2022.06.06</Date>
          <Title>ЗАПУСК ПРОЕКТА</Title>
          <RegularText>Запуск основной коллекции из 5439 NFT ﻿на различных площадках</RegularText>
        </Event>
        <Event position="2">
          <Date>2022 Q2</Date>
          <Title>РАЗВИТИЕ МЕТА-КРИПТО СООБЩЕСТВА</Title>
          <RegularText>
            Создание сообществ на площадках Telegram, YouTube, Twitter, Discord. На них происходит обучающая и
            просветительская деятельность в области криптовалют и мета-пространства
          </RegularText>
        </Event>
        <Event position="3">
          <Date>2022 Q3</Date>
          <Title>КОНКУРС ХУДОЖНИКОВ + РАЗВИТИЕ НОВОЙ КОЛЛЕКЦИИ</Title>
          <RegularText>Создание новой коллекции JokerAVATAR + презентация новой 3D коллекции</RegularText>
          <Title>AIRDROP ДЛЯ РАННИХ ДЕРЖАТЕЛЕЙ NFT</Title>
          <RegularText>Создание закрытого сообщества для держателей NFT</RegularText>
        </Event>
        <Event position="4">
          <Date>2023</Date>
          <Title>ВЫПУСК ДОПОЛНЯЮЩИХ NFT ТАЛИСМАНОВ ДЛЯ ОСНОВНОЙ КОЛЛЕКЦИИ</Title>
          <RegularText>
            Чеканка NFT коллекции 7-ми сил каждой чакры в виде образа (мандалы) для медитации-концентрации
          </RegularText>
        </Event>
        <Event position="5">
          <Date>2023 Q1</Date>
          <Title>ЗАПУСК JOKER ART COMMUNITY</Title>
          <RegularText>
            NFT маркетплейс нового поколения. Приобрести арт получает возможность каждый. Содатель арта же - только
            истинный Творец своего Мира из среды владельцев NFT Crypto Joker
          </RegularText>
        </Event>
        <Event position="6">
          <Date>2023</Date>
          <Title>ЗАПУСК DAO</Title>
          <RegularText>Создание благотворительной/инвестиционной программы</RegularText>
        </Event>
      </Content>
    </Wrapper>
  );
};

export default Roadmap;
