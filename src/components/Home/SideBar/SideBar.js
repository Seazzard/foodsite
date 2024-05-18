import React from 'react';
import Logo from '../../../assets/Home/logo.png';
import { Link, NavLink } from 'react-router-dom';
import Pizza from '../../../assets/icons/Pizza.png';
import Rolls from '../../../assets/icons/Rolls.png';
import Salad from '../../../assets/icons/Salad.png';
import Sale from '../../../assets/icons/Sale.png';
import Sets from '../../../assets/icons/Sets.png';
import Soup from '../../../assets/icons/Soup.png';
import Sushi from '../../../assets/icons/Sushi.png';
import Wok from '../../../assets/icons/Wok.png';
import Drinks from '../../../assets/icons/Drinks.png';
import Corndog from '../../../assets/icons/Corndog.png';
import Soon from './Soon';

const SideBar = () => {
  return (
    <aside className="home__sidebar">
      <div className="home__sidebar-top">
        <Link to="/">
          <img className="home__sidebar-logo" src={Logo} alt="logo" />
        </Link>
        <h1 className="home__sidebar-title">Romsem</h1>
      </div>
      <ul className="home__sidebar-list">
        <li className="home__sidebar-list-item">
          <img src={Pizza} alt="Pizza" />
          <NavLink className="home__sidebar-link" to="/pizza">
            Пицца
          </NavLink>
        </li>
        <li className="home__sidebar-list-item">
          <img src={Sets} alt="Sets" />
          <NavLink className="home__sidebar-link" to="/sets">
            Сеты
          </NavLink>
        </li>
        <li className="home__sidebar-list-item">
          <img src={Wok} alt="Wok" />
          <NavLink className="home__sidebar-link" to="/wok">
            WOK
          </NavLink>
        </li>
        <li className="home__sidebar-list-item">
          <img src={Rolls} alt="Rolls" />
          <NavLink className="home__sidebar-link" to="/rolls">
            Роллы
          </NavLink>
        </li>
        <li className="home__sidebar-list-item">
          <img src={Sushi} alt="Sushi" />
          <NavLink className="home__sidebar-link" to="/sushi">
            Суши
          </NavLink>
        </li>
        <li className="home__sidebar-list-item">
          <img src={Salad} alt="Salad" />
          <NavLink className="home__sidebar-link" to="/salad">
            Салаты
          </NavLink>
          {/* <Soon /> */}
        </li>
        <li className="home__sidebar-list-item">
          <img src={Soup} alt="Soup" />
          <NavLink className="home__sidebar-link" to="/soup">
            Супы
          </NavLink>
          {/* <Soon /> */}
        </li>
        <li className="home__sidebar-list-item">
          <img src={Corndog} alt="Corndog" />
          <NavLink className="home__sidebar-link" to="/corndog">
            Корндоги
          </NavLink>
          {/* <Soon /> */}
        </li>
        <li className="home__sidebar-list-item">
          <img src={Drinks} alt="Drinks" />
          <NavLink className="home__sidebar-link" to="/drink">
            Напитки
          </NavLink>
        </li>
        <li className="home__sidebar-list-item">
          <img src={Sale} alt="Sale" />
          <NavLink className="home__sidebar-link" to="/sale">
            Акции
          </NavLink>
          <Soon />
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
