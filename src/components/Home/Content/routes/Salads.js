import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/Salad.png';

const Salads = () => {
  return <RouteContent Logo={Logo} title={'Салаты'} path={'salad'} />;
};

export default Salads;
