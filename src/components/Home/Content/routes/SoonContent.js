import React from 'react';
import Sad from '../../../../assets/Home/sad.png';

const SoonContent = () => {
  return (
    <>
      <h2 className="home__soon-title">
        Этот раздел находится в активной разработке
      </h2>
      <img className="home__soon-img" src={Sad} alt="Sad" />
    </>
  );
};

export default SoonContent;
