import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ModalComponent from 'components/Modal/Modal';

import { data } from 'data/cardsData';

import 'swiper/css/navigation';
import 'swiper/swiper.min.css';

const Carousel = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalDataState, setModalDataState] = useState(null);

  const openModal = (modalData) => {
    setModalDataState(modalData);
    setIsOpenModal(true);
  };
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <SwiperWrapper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        breakpoints={{
          695: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          }
        }}
        navigation
        loop
      >
        {data.map(({ id, altPreviewImage, previewVideo, openSeaLink }) => {
          const modalData = {
            previewVideo,
            openSeaLink
          };

          return (
            <SwiperSlide key={id}>
              <SlideCard key={id} onClick={() => openModal(modalData)}>
                <img src={altPreviewImage} alt="1" />
              </SlideCard>
            </SwiperSlide>
          );
        })}
      </SwiperWrapper>
      <ModalComponent isOpenModal={isOpenModal} closeModal={closeModal}>
        <ModalWrapper>
          <video src={modalDataState?.previewVideo} autoPlay loop width="300" />
          <ModalLink href={modalDataState?.openSeaLink} target="_blank">
            Перейти на OpenSea
          </ModalLink>
        </ModalWrapper>
      </ModalComponent>
    </>
  );
};

export default Carousel;

const SwiperWrapper = styled(Swiper)`
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

const SlideCard = styled.div`
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

const ModalWrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    padding: 4rem 6rem;

    @media (max-width: ${breakpoints.sm}) {
      padding: 0;
    }
  `
);

const ModalLink = styled.a(
  ({ theme: { colors, fontSize } }) => css`
    display: inline-block;
    margin: 2rem auto 0;
    color: ${colors.white};
    font-size: ${fontSize.md};
    text-underline-offset: 0.3rem;
  `
);
