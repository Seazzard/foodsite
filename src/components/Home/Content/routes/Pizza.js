import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/Pizza.png';

const Pizza = () => {
  return <RouteContent Logo={Logo} title={'Пицца'} path={'pizza'} />;
};

export default Pizza;
