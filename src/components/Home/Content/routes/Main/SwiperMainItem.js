import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Price from '../RouteContent/Price';
import Star from './img/star.png';

const SwiperMainItem = ({ arr }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={1}
        loopfillgroupwithblank="true"
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swiper__main"
      >
        {arr.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swipermain__card">
              <img
                className="swipermain__img"
                src={item.imageUrl}
                alt={item.title}
              />
              <h4 className="swipermain__name">{item.title}</h4>
              <div className="swiper__stars">
                <img className="swiper__star" src={Star} alt="" />
                <img className="swiper__star" src={Star} alt="" />
                <img className="swiper__star" src={Star} alt="" />
                <img className="swiper__star" src={Star} alt="" />
                <img className="swiper__star" src={Star} alt="" />
              </div>
              <div className="swipermain__buy">
                <Price price={item.price} />
                <button className="swipermain__btn">Хочу!</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperMainItem;
