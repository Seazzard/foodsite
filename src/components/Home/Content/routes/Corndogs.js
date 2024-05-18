import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/Corndog.png';

const Corndogs = () => {
  return <RouteContent Logo={Logo} title={'Корндоги'} path={'corndog'} />;
};

export default Corndogs;
