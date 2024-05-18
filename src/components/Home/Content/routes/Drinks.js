import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/Drinks.png';

const Drinks = () => {
  return <RouteContent Logo={Logo} title={'Напитки'} path={'drinks'} />;
};

export default Drinks;
