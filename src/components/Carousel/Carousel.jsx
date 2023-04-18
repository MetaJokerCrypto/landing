import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ModalComponent from 'components/Modal/Modal';
import { data } from 'data/cardsData';

import 'swiper/css/navigation';
import 'swiper/swiper.min.css';

import { SwiperWrapper, SlideCard } from './styled';

const Carousel = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
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
      loop>
      {data.map(({ id, previewImage }) => (
        <>
          <SwiperSlide>
            <SlideCard key={id} onClick={openModal}>
              <img src={previewImage} alt="1" />
            </SlideCard>
          </SwiperSlide>
          <ModalComponent isOpenModal={isOpenModal} closeModal={closeModal}>
            <img src={previewImage} alt="1" />
            <button>Купить</button>
          </ModalComponent>
        </>
      ))}
    </SwiperWrapper>
  );
};

export default Carousel;
