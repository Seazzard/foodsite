import React from 'react';
import './main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Pic1 from './img/Mainimg.png';
import Pic2 from './img/Mainimg1.jpg';

const FirstSwiper = () => {
  return (
    <div className="main">
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        loopfillgroupwithblank="true"
        pagination={true}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper firstSwiper"
      >
        <SwiperSlide>
          <div className="main__swip-block">
            <img className="main__swiper-img" src={Pic1} alt="picture" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__swip-block">
            <img className="main__swiper-img" src={Pic2} alt="picture" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSwiper;
