import React, { useContext, useState } from 'react';
import PizzaSize from '../routes/RouteContent/PizzaSize';
import Price from '../routes/RouteContent/Price';
import WantBuy from '../routes/RouteContent/WantBuy';
import { CustomContext } from '../../../../Context';

const ProductContent = ({ item }) => {
  const { minusOne, plusOne, cart } = useContext(CustomContext);
  const [pizza, setPizza] = useState({ size: 0 });

  return (
    <div className="product__content">
      <img
        className="product__content-img"
        src={item.imageUrl}
        alt={item.title}
      />
      <div className="product__content-info">
        <h2 className="product__content-title">{item.title}</h2>
        {item.categories === 'pizza' ? (
          <PizzaSize
            item={pizza.categories === 'pizza' ? pizza : item}
            setPizza={setPizza}
          />
        ) : item.categories === 'rolls' ||
          item.categories === 'wok' ||
          item.categories === 'sushi' ||
          item.categories === 'corndog' ||
          item.categories === 'soup' ||
          item.categories === 'salad' ? (
          <p className="content__card-option">{item.ingredients.join(',')}</p>
        ) : item.categories === 'sets' ? (
          <>
            <p className="content__card-option">{item.combo.join(',')}</p>
            <p className="content__card-option">
              1000 грамм, Кол-во:{item.count}
            </p>
          </>
        ) : (
          ''
        )}
        <div className="product__content-buy">
          <Price
            price={
              pizza.categories === 'pizza' && pizza.size === 1
                ? item.priceMiddle
                : pizza.categories === 'pizza' && pizza.size === 2
                ? item.priceLarge
                : item.price
            }
          />
          <div
            className="product__content-line"
            onClick={() => {
              let idx = cart.findIndex((el) => {
                if (item.categories === 'pizza') {
                  return el.title === item.title && el.size === pizza.size;
                } else {
                  return el.title === item.title;
                }
              });
              if (idx > -1) {
                minusOne(pizza.categories === 'pizza' ? pizza : item);
              } else {
                console.log('Корзина пуста');
              }
            }}
          >
            −
          </div>
          <div className="product__content-pay">
            <span className="product__content-pay-count">1</span>
            <button
              className="product__content-pay-btn"
              onClick={() =>
                plusOne(pizza.categories === 'pizza' ? pizza : item)
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="product__content-want-btn">
          <WantBuy item={item.categories === 'pizza' ? pizza : item} />
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
