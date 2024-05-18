import axios from 'axios';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState(false);
  const [all, setAll] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  const searchHandler = (text) => {
    if (text) {
      axios('http://localhost:8080/all').then(({ data }) =>
        setAll(
          Object.values(data)
            .reduce((acc, rec) => {
              return [
                ...acc,
                rec.filter((item) =>
                  item.title.toUpperCase().startsWith(text.toUpperCase())
                ),
              ];
            }, [])
            .flat()
        )
      );
    } else {
      setAll([]);
    }
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__phone">
          <p className="header__phone-title">Наш телефон</p>
          <a className="header__phone-tel" href="tel:+996 705 188 955">
            +996 705 188 955
          </a>
          <a className="header__phone-tel" href="tel:+996 555 188 955">
            +996 555 188 955
          </a>
          <p className="header__phone-time">
            <svg
              width="15.000000"
              height="15.000000"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip7_41">
                  <rect
                    id="Часы"
                    width="15.000000"
                    height="15.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Часы"
                width="15.000000"
                height="15.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g>
                <path
                  id="Vector"
                  d="M7.5 2.44C7.67 2.44 7.82 2.29 7.82 2.11L7.82 1.95C7.82 1.77 7.67 1.63 7.5 1.63C7.32 1.63 7.17 1.77 7.17 1.95L7.17 2.11C7.17 2.29 7.32 2.44 7.5 2.44Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M7.5 12.55C7.32 12.55 7.17 12.7 7.17 12.88L7.17 13.04C7.17 13.22 7.32 13.36 7.5 13.36C7.67 13.36 7.82 13.22 7.82 13.04L7.82 12.88C7.82 12.7 7.67 12.55 7.5 12.55Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M2.11 7.17L1.95 7.17C1.77 7.17 1.63 7.32 1.63 7.5C1.63 7.67 1.77 7.82 1.95 7.82L2.11 7.82C2.29 7.82 2.44 7.67 2.44 7.5C2.44 7.32 2.29 7.17 2.11 7.17Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M13.04 7.17L12.88 7.17C12.7 7.17 12.55 7.32 12.55 7.5C12.55 7.67 12.7 7.82 12.88 7.82L13.04 7.82C13.22 7.82 13.36 7.67 13.36 7.5C13.36 7.32 13.22 7.17 13.04 7.17Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M3.81 3.35C3.68 3.22 3.48 3.22 3.35 3.35C3.22 3.48 3.22 3.68 3.35 3.81L3.47 3.92C3.53 3.99 3.61 4.02 3.7 4.02C3.78 4.02 3.86 3.99 3.92 3.92C4.05 3.79 4.05 3.6 3.92 3.47L3.81 3.35Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M3.47 11.07L3.35 11.18C3.22 11.31 3.22 11.51 3.35 11.64C3.42 11.7 3.5 11.73 3.58 11.73C3.66 11.73 3.75 11.7 3.81 11.64L3.92 11.52C4.05 11.39 4.05 11.2 3.92 11.07C3.79 10.94 3.6 10.94 3.47 11.07Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M11.18 3.35L11.07 3.47C10.94 3.6 10.94 3.79 11.07 3.92C11.13 3.99 11.21 4.02 11.29 4.02C11.38 4.02 11.46 3.99 11.52 3.92L11.64 3.81C11.77 3.68 11.77 3.48 11.64 3.35C11.51 3.22 11.31 3.22 11.18 3.35Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M7.82 7.36L7.82 4.4C7.82 4.22 7.67 4.07 7.5 4.07C7.32 4.07 7.17 4.22 7.17 4.4L7.17 7.5C7.17 7.58 7.2 7.66 7.27 7.72L10.84 11.29C10.9 11.36 10.98 11.39 11.07 11.39C11.15 11.39 11.23 11.36 11.29 11.29C11.42 11.16 11.42 10.97 11.29 10.84L7.82 7.36Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M7.5 0C3.35 0 0 3.35 0 7.5C0 11.64 3.35 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.35 11.64 0 7.5 0ZM7.5 14.34C3.71 14.34 0.65 11.28 0.65 7.5C0.65 3.71 3.71 0.65 7.5 0.65C11.28 0.65 14.34 3.71 14.34 7.5C14.34 11.28 11.28 14.34 7.5 14.34Z"
                  fill="#FF9846"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </g>
            </svg>
            работаем с 10:00 до 00:00
          </p>
        </div>
        <div className="header__address">
          <p className="header__address-title">Город:</p>
          <p className="header__address-city">Тюмень</p>
        </div>
      </div>
      <div className="header__right">
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink className="header__link" to="/reviews">
              Отзывы
            </NavLink>
          </li>
          <li className="header__list-item">
            <Link className="header__link" to="/delivery">
              Доставка и оплата
            </Link>
          </li>
        </ul>
        <div className="header__search">
          <input
            style={{
              display: `${search ? 'inline-block' : 'none'}`,
            }}
            type="search"
            className="header__search-input"
            value={searchVal}
            onChange={(e) => {
              searchHandler(e.target.value);
              setSearchVal(e.target.value);
            }}
          />
          <button
            type="button"
            className="header__search-btn"
            onClick={() => setSearch(!search)}
          >
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip4_29">
                  <rect
                    id="Search_ico"
                    width="30.000000"
                    height="30.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Search_ico"
                width="30.000000"
                height="30.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g>
                <path
                  id="Vector"
                  d="M29.81 28.93L20.68 19.8C22.58 17.69 23.75 14.92 23.75 11.87C23.75 5.32 18.42 0 11.87 0C5.32 0 0 5.32 0 11.87C0 18.42 5.32 23.75 11.87 23.75C14.92 23.75 17.69 22.58 19.8 20.68L28.93 29.81C29.05 29.93 29.21 30 29.37 30C29.53 30 29.69 29.93 29.81 29.81C30.06 29.57 30.06 29.17 29.81 28.93ZM11.87 22.5C6.01 22.5 1.25 17.73 1.25 11.87C1.25 6.01 6.01 1.24 11.87 1.24C17.73 1.24 22.5 6.01 22.5 11.87C22.5 17.73 17.73 22.5 11.87 22.5Z"
                  fill="#A4ACAD"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </button>
          <ul
            style={{
              display: `${search && all.length ? 'flex' : 'none'}`,
            }}
            className="header__search-list"
          >
            {all.map((item, idx) => (
              <li key={idx} className="header__search-list-item">
                <Link
                  to={`/${item.categories}/product/${item.id}`}
                  onClick={() => {
                    setSearch(false);
                    setSearchVal('');
                    setAll([]);
                  }}
                >
                  <img
                    className="header__search-list-img"
                    src={item.imageUrl}
                    alt=""
                  />
                </Link>
                <div className="header__search-list-info">
                  <h2 className="header__search-list-title">{item.title}</h2>
                  <p className="header__search-list-price">{item.price}₽</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
