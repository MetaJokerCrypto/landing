import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperWrapper = styled(Swiper)`
  .swiper-wrapper {
    padding-left: 50px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-button-next {
    right: -2px;
  }

  .swiper-button-prev {
    left: -2px;
  }
`;

export const SlideCard = styled.div`
  width: 300px;
  margin: 0 auto;

  img {
    max-width: 200px;
    cursor: pointer;
  }

  @media (max-width: 22rem) {
    img {
      max-width: 160px;
    }
  }
`;

export const ModalWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    padding: 4rem 6rem;

    @media (max-width: ${breakpoints.sm}) {
      padding: 0;
    }
  `
);

export const ModalLink = styled.a(
  ({ theme: { colors, fontSize } }) => css`
    display: inline-block;
    margin: 2rem auto 0;
    color: ${colors.white};
    font-size: ${fontSize.md};
    text-underline-offset: 0.3rem;
  `
);
