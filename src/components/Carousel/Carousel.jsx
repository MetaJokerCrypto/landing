import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ModalComponent from 'components/Modal/Modal';
import { data } from 'data/cardsData';

import 'swiper/css/navigation';
import 'swiper/swiper.min.css';

import { SwiperWrapper, SlideCard, ModalWrapper, ModalLink } from './styled';

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
