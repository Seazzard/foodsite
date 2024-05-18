import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/Rolls.png';

const Rolls = () => {
  return (
    <div>
      <RouteContent Logo={Logo} title={'Роллы'} path={'rolls'} />
    </div>
  );
};

export default Rolls;
