import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SortItem from '../SortItem/SortItem';
import Card from './Card/Card';

const RouteContent = ({ Logo, title, path }) => {
  const [arr, setArr] = useState([]);
  const [sort, setSort] = useState('По умолчанию');
  // const [size, setSize] = useState(0);

  useEffect(() => {
    axios(`http://localhost:8080/${path}`).then(({ data }) => setArr(data));
  }, []);

  return (
    <div>
      <div className="content__header">
        <div className="content__header-left">
          <img className="content__header-img" src={Logo} alt={title} />

          <h3 className="content__header-title">{title}</h3>
        </div>
        <div className="content__header-sort">
          <p className="content__header-sort-title">Сортировка</p>
          <p className="content__header-sort-default">
            {sort} <span>︾</span>
          </p>
          <div className="content__header-sort-line"></div>
          <ul className="content__header-sort-list">
            <SortItem text={'По названию'} setSort={setSort} />
            <SortItem text={'Сначала дешевле'} setSort={setSort} />
            <SortItem text={'Сначала дороже'} setSort={setSort} />

            {path === 'sets' ? (
              <>
                <SortItem text={'Кол-во роллов'} setSort={setSort} />
                <SortItem text={'Вес'} setSort={setSort} />
              </>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
      <div className="content__row">
        {arr
          .sort((a, b) => {
            if (sort === 'По названию') {
              return a.title > b.title ? 1 : -1;
            } else if (sort === 'Сначала дешевле') {
              return a.price - b.price;
            } else if (sort === 'Сначала дороже') {
              return b.price - a.price;
            } else if (sort === 'Кол-во роллов') {
              return a.count - b.count;
            } else if (sort === 'Вес') {
              return a.count - b.count;
            }
          })
          .map((item) => (
            <Card key={item.id} item={item} path={path} />
            // <div className="content__card" key={item.id}>
            //   <Link to={`/${path}/product/${item.id}`}>
            //     <img className="content__card-img" src={item.imageUrl} alt="" />
            //     <h4 className="content__card-title">{item.title}</h4>
            //   </Link>
            //   {path === 'pizza' ? (
            //     <PizzaSize item={item} />
            //   ) : path === 'rolls' ||
            //     path === 'wok' ||
            //     path === 'sushi' ||
            //     path === 'corndog' ||
            //     path === 'soup' ||
            //     path === 'salad' ? (
            //     <p className="content__card-option">
            //       {item.ingredients.filter((item, idx) => idx < 3).join(',')}.
            //     </p>
            //   ) : path === 'sets' ? (
            //     <p className="content__card-option">
            //       1000 гр., Кол-во: {item.count}
            //     </p>
            //   ) : (
            //     ''
            //   )}
            //   <div className="content__card-bot">
            //     <Price
            //       price={
            //         path === 'pizza' && item.size === 1
            //           ? item.priceMiddle
            //           : path === 'pizza' && item.size === 2
            //           ? item.priceLarge
            //           : item.price
            //       }
            //     />
            //     <WantBuy item={item} />
            //   </div>
            // </div>
          ))}
      </div>
    </div>
  );
};

export default RouteContent;

//.sort((a, b) => (a.title > b.title ? 1 : -1))
