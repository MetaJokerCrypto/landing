import styled from 'styled-components';
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
  }

  @media (max-width: 22rem) {
    img {
      max-width: 160px;
    }
  }
`;
