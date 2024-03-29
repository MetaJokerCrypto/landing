import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import SEO from 'components/SEO/SEO';

import Layout from 'components/Layout/Layout';
import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';

const P2B = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout>
      <Wrapper>
        <Heading type="h1">P2B</Heading>
        <Section>
          <RegularText>
            Р2В (Play-to-Benefit) - это ментально-цифровой формат взаимоотношений и взаимодействия во всех сферах
            крипто-мира. В основании данного формата, лежит Золотое правило Нравственности с принципом
            “выиграл-выиграл”.
          </RegularText>
          <RegularText>
            По-сути, игра без проигравших - это когда ты становишься богаче от того, что помогаешь разбогатеть другому,
            - разбогатеть духовно, интеллектуально и/или финансово-материально. Когда на всех уровнях взаимодействия
            выгоду получает каждый, кого участвует в игровом процессе.
          </RegularText>
          <RegularText>
            Человек в Р2В нацелен на личностный рост, развитие этики и нравственности. Он всегда пребывает в
            доброжелательном расположении Духа генерирует радость и мудрость в окружающее его пространство. Также в
            Р2В-сегменте Человек приобретает определенный, необходимый ему навык или осваивает профессию.
          </RegularText>
          <RegularText>
            Формат Meta Joker - это форма P2B, в основе которой лежит уникальная технология расширения Сознания Homo,
            через активацию Энергетических Центров и Шишковидной железы за счет энергоинформационного обмена с Природой
            и между людьми, обмена интеллектуальной, творческой и денежной энергиями по{' '}
            <Link
              href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BF%D1%80%D0%B8%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_(%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5)"
              target="_blank">
              Закону Притяжения
            </Link>{' '}
             - подобное притягивает подобное.
          </RegularText>
        </Section>
        <Heading>P2B игра Joker SMile</Heading>
        <Section>
          <RegularText>
            Метавселенная — это гораздо более широкое понятие, чем просто виртуальные игры, и это сочетание виртуальной
            реальности (VR), дополненной реальности (AR), смешанной реальности (MR), NFT, блокчейна, WEB 3.0,
            криптовалют, социальных сетей и многое другое.
          </RegularText>
          <RegularText>
            В то время как VR, AR и MR являются одними из наиболее важных элементов метавселенной, которые, по сути,
            предлагают пользователям трехмерный виртуальный опыт с эффектом присутствия, давайте рассмотрим, какое место
            в этом мета-коктейле занимает модель Р2В (Play to Benefit) и проект Crypto Joker, что именно они собой
            представляют?
          </RegularText>
          <RegularText>
            В Joker Smile на основе P2B создана модель NFT-игры уровня WEB 3.0, с инновационной системой
            взаимодополняемых токенов. Суть модели в энергоинформационном обмене между людьми, обмене интеллектуальной,
            творческой и денежной энергиями по Закону Притяжения (подобное притягивает подобное).
          </RegularText>
          <RegularText>
            Модель P2B и проект Crypto Joker, рождены в Крипто-Вселенной где Игрок-Единомышленник, является частью
            инициативы ”Новой Эры”, направленной на построение лучшего Мира и Личности, лучшей Этики и Морали. Это
            выражено в идее, которая разными способами трансформирует этот Мир в лучшее место для жизни Человека.
          </RegularText>
          <RegularText>
            Р2В позволяет Человеку всегда пребывать в творческом резонансе с земной Жизнью и внутренним Миром!
          </RegularText>
        </Section>
      </Wrapper>
    </Layout>
  </ThemeProvider>
);

export default P2B;

export const Head = () => <SEO />;

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.purple};
  `
);
