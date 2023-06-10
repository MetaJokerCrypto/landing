import React from 'react';

import RegularText from 'components/Text/RegularText';

import styled, { css } from 'styled-components';

import red from 'images/red-c.svg';
import orange from 'images/orange-c.svg';
import yellow from 'images/yellow-c.svg';
import green from 'images/green-c.svg';
import blue from 'images/light-blue-c.svg';
import purple from 'images/purple-c.svg';

const Roadmap = () => (
  <Wrapper>
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
        NFT маркетплейс нового поколения. Приобрести арт получает возможность каждый. Содатель арта же - только истинный
        Творец своего Мира из среды владельцев NFT Crypto Joker
      </RegularText>
    </Event>
    <Event position="6">
      <Date>2023</Date>
      <Title>ЗАПУСК DAO</Title>
      <RegularText>Создание благотворительной/инвестиционной программы</RegularText>
    </Event>
  </Wrapper>
);

export default Roadmap;

const handleIconType = (position) => {
  switch (position) {
    case '1':
      return red;
    case '2':
      return orange;
    case '3':
      return yellow;
    case '4':
      return green;
    case '5':
      return blue;
    case '6':
      return purple;
    default:
      return '#fff';
  }
};

const Wrapper = styled.div(
  ({ theme: { breakpoints, colors } }) => css`
    position: relative;
    width: 60%;
    margin: 0 auto;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: ${colors.white};
      margin: 0.6rem 0;
    }

    @media (max-width: ${breakpoints.md}) {
      width: 100%;
    }
  `
);

const Title = styled.div(
  ({ theme: { breakpoints, fontSize } }) => css`
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${fontSize.md2};
    font-family: 'Merriweather', serif;

    @media (max-width: ${breakpoints.md}) {
      margin: 1rem 0;
      font-size: ${fontSize.md};
    }
  `
);

const Date = styled.div(
  ({ theme: { breakpoints, colors, fontSize } }) => css`
    position: absolute;
    top: 40%;
    left: -16rem;
    font-size: ${fontSize.lg};
    font-family: 'Merriweather', serif;
    color: ${colors.white};

    @media (max-width: ${breakpoints.md}) {
      position: static;
      font-size: ${fontSize.md};
    }
  `
);

const Event = styled.div(
  ({ position, theme: { breakpoints, colors } }) => css`
    position: relative;
    max-width: 35rem;
    padding: 1.5rem;
    margin: 3.75rem 0 0 4rem;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;
    background-color: ${colors.textArea};
    color: ${colors.white};

    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: -5.3rem;
      width: 2.5rem;
      height: 2.5rem;
      background: url(${() => handleIconType(position)});
      background-size: 2.5rem 2.5rem;
      background-repeat: no-repeat;
    }

    @media (max-width: ${breakpoints.md}) {
      max-width: fit-content;
    }

    @media (max-width: ${breakpoints.sm}) {
      margin: 3.75rem 0 0 2rem;

      &:before {
        left: -3.3rem;
      }
    }
  `
);
