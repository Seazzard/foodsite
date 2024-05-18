import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './footer.css';
import Insta from './img/instagram.png';
import Telega from './img/telegram.png';
import Whats from './img/whatsapp.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__line"></div>
      <div className="footer__container">
        <div className="footer__left">
          <ul className="footer__left-list">
            <li className="footer__left-link">
              <Link>О компании</Link>
            </li>
            <li className="footer__left-link">
              <Link to={'/delivery'}>Доставка и оплата</Link>
            </li>
            <li className="footer__left-link">
              <Link>Лента материалов</Link>
            </li>
            <li className="footer__left-link">
              <Link>Политика возврата</Link>
            </li>
          </ul>
        </div>
        <div className="footer__center">
          <h3 className="footer__center-title">Введите номер</h3>
          <p className="footer__center-text">
            Выберите удобный
            <br />
            мессенджер для общения
          </p>
          <div className="footer__center-list-link">
            <a target="_blank" className="footer__center-link" href="#">
              <img src={Whats} />
            </a>
            <a target="_blank" className="footer__center-link" href="#">
              <img src={Telega} />
            </a>
            <a target="_blank" className="footer__center-link" href="#">
              <img src={Insta} />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <a className="footer__right-link" href="tel:+996705188955">
            Тел:+996 705 188 955
          </a>
          <a className="footer__right-link" href="tel:+996555188955">
            Тел:+996 555 188 955
          </a>
          <p className="footer__right-text">Адрес:Бакаева 126</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
