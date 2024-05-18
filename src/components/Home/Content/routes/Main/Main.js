import React from 'react';
import FirstSwiper from './FirstSwiper';
import SecondSwiper from './SwiperMain';
import Chicken from './img/Chicken.jpeg';
import Pizza from './img/pizza.jpeg';
import Sushi from './img/sushi.jpeg';
import Corndog from './img/corndog.jpeg';
import Fish from './img/fish.jpeg';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <FirstSwiper />
      <div className="main__menu">
        <div className="main__menu-big">
          <img className="main__menu-big-img" src={Chicken} />
          <p className="main__menu-title">Чикен</p>
        </div>
        <div className="main__menu-small">
          <img className="main__menu-small-img" src={Sushi} />
          <p className="main__menu-title">Суши</p>
        </div>
        <div className="main__menu-small">
          <img className="main__menu-small-img" src={Corndog} />
          <p className="main__menu-title">Корндог</p>
        </div>
        <div className="main__menu-big">
          <img className="main__menu-big-img" src={Pizza} />
          <p className="main__menu-title">Пицца</p>
        </div>
        <div className="main__menu-big">
          <img className="main__menu-big-img" src={Fish} />
          <p className="main__menu-title">Акции</p>
        </div>
      </div>
      <SecondSwiper />
    </div>
  );
};

export default Main;
