import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperMain.css';
import axios from 'axios';
import SwiperMainItem from './SwiperMainItem';

const SwiperMain = () => {
  const [setsCard, setSetsCard] = useState([]);
  const [pizzaCard, setPizzaCard] = useState([]);
  const [swiperMain, setSwiperMain] = useState('new');

  const popularHandler = () => {
    return setSwiperMain('popular');
  };
  const newHandler = () => {
    return setSwiperMain('new');
  };

  useEffect(() => {
    axios('http://localhost:8080/sets').then(({ data }) =>
      setSetsCard(data.slice(0, 6))
    );
    axios('http://localhost:8080/pizza').then(({ data }) =>
      setPizzaCard(data.slice(0, 6))
    );
  }, []);

  return (
    <>
      <div className="swiper__title">
        <h1
          style={{
            color: `${swiperMain === 'new' ? '#000000' : '#A4ACAD'}`,
            borderBottom: `${
              swiperMain === 'new' ? 'none' : '1px solid #A4ACAD'
            }`,
          }}
          onClick={() => newHandler()}
          className="swipermain__title"
        >
          Новинки
        </h1>
        <h1
          style={{
            color: `${swiperMain === 'popular' ? '#000000' : '#A4ACAD'}`,
            borderBottom: `${
              swiperMain === 'popular' ? 'none' : '1px solid #A4ACAD'
            }`,
          }}
          onClick={() => popularHandler()}
          className="swipermain__title"
        >
          Популярное
        </h1>
      </div>
      {swiperMain === 'new' ? (
        <SwiperMainItem arr={setsCard} />
      ) : (
        <SwiperMainItem arr={pizzaCard} />
      )}
    </>
  );
};

export default SwiperMain;
