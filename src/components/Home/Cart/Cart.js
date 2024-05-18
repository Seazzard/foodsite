import React, { useContext } from 'react';
import { CustomContext } from '../../../Context';
import './cart.css';
import Map from './img/tyumen.png';

const Cart = () => {
  const { cart, plusOne, minusOne, deleteItem } = useContext(CustomContext);
  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <div className="cart__basket">
          <div className="cart__basket-title">Корзина</div>
          <ul className="cart__list">
            {cart.map((item) => (
              <li key={item.title + item.size} className="cart__item">
                <img
                  className="cart__item-img"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="cart__item-info">
                  <h3 className="cart__item-title">{item.title}</h3>
                  <div className="cart__item-buy">
                    <div className="cart__item-count">
                      <span
                        className="cart__item-minus"
                        onClick={() => minusOne(item)}
                      >
                        -
                      </span>
                      {item.count}
                      <span
                        className="cart__item-plus"
                        onClick={() => plusOne(item)}
                      >
                        +
                      </span>
                    </div>
                    <span className="cart__item-price">
                      {(item.categories === 'pizza' && item.size === 1
                        ? item.priceMiddle
                        : item.categories === 'pizza' && item.size === 2
                        ? item.priceLarge
                        : item.price) * item.count}
                      ₽
                    </span>
                  </div>
                </div>
                <span
                  className="cart__item-delete"
                  onClick={() => deleteItem(item)}
                >
                  ✘
                </span>
              </li>
            ))}
          </ul>
          <div className="cart__basket-bottom">
            <span className="cart__basket-price">
              {cart.reduce((acc, rec) => {
                return (
                  acc +
                  (rec.categories === 'pizza' && rec.size === 1
                    ? rec.priceMiddle
                    : rec.categories === 'pizza' && rec.size === 2
                    ? rec.priceLarge
                    : rec.price) *
                    rec.count
                );
              }, 0)}
              ₽
            </span>
            <button className="cart__basket-order">Оформить заказ</button>
          </div>
        </div>
      ) : (
        <div className="cart__card">
          <h2 className="cart__title">Ваша корзина пуста.</h2>
          <p className="cart__subtitle">Добавьте же скорее что-нибудь!</p>
          <div className="cart__free">Бесплатная доставка от 800 ₽</div>
          <img className="cart__img" src={Map} alt="map" />
          <button className="cart__btn">
            <svg
              width="25.000000"
              height="38.000000"
              viewBox="0 0 25 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M12 0C4.88 0 -0.9 5.78 -0.9 12.89C-0.9 15.75 0.78 20.09 4.39 26.57C6.86 30.98 9.31 34.72 9.42 34.87L11.19 37.56C11.37 37.83 11.67 38 12 38C12.32 38 12.62 37.83 12.8 37.56L14.57 34.87C14.68 34.72 17.11 31.02 19.6 26.57C23.21 20.1 24.89 15.75 24.89 12.89C24.89 5.78 19.11 0 12 0ZM17.91 25.63C15.46 30.02 13.06 33.66 12.96 33.81L12 35.27L11.03 33.81C10.93 33.65 8.51 29.98 6.08 25.63C2.73 19.62 1.03 15.34 1.03 12.89C1.03 6.85 5.95 1.93 12 1.93C18.04 1.93 22.96 6.85 22.96 12.89C22.96 15.34 21.26 19.62 17.91 25.63Z"
                fill="#F2F2F2"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M12 5.66C8.05 5.66 4.84 8.87 4.84 12.81C4.84 16.75 8.05 19.96 12 19.96C15.94 19.96 19.15 16.75 19.15 12.81C19.15 8.87 15.94 5.66 12 5.66ZM12 18.03C9.12 18.03 6.78 15.69 6.78 12.81C6.78 9.93 9.12 7.59 12 7.59C14.87 7.59 17.21 9.93 17.21 12.81C17.21 15.69 14.87 18.03 12 18.03Z"
                fill="#F2F2F2"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <h2 className="cart__title">Укажите адрес</h2>
          <p className="cart__subtitle">И узнайте время доставки</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
