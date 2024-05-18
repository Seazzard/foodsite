import React, { useEffect, useState } from 'react';
import './product.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Price from '../routes/RouteContent/Price';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductContent from './ProductContent';

const Product = () => {
  const [product, setProduct] = useState({});
  const [rec, setRec] = useState([]);
  const { path, id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:8080/${path}/${id}`).then(({ data }) =>
      setProduct(data)
    );
    axios(`http://localhost:8080/${path}`).then(({ data }) =>
      setRec(data.slice(0, 6))
    );
  }, [path, id]);

  return (
    <div className="product">
      <div className="product__link">
        <svg
          width="20.000000"
          height="20.000000"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <circle
            id="Ellipse 1"
            cx="10.000000"
            cy="10.000000"
            r="10.000000"
            fill="#FF9846"
            fillOpacity="1.000000"
          />
          <path
            id="Vector 4"
            d="M11.75 5.75L7.25 10.25L11.75 14.75"
            stroke="#F2F2F2"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinecap="round"
          />
        </svg>
        <span className="product__link-text" onClick={() => navigate(-1)}>
          Назад
        </span>
      </div>
      <ProductContent item={product} />
      <h3 className="product__rec">Рекомендуем к этому товару</h3>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={90}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper product__swiper"
      >
        {rec.map((item, idx) => (
          <SwiperSlide key={item.id}>
            <div className="product__swiper-card">
              <img
                className="product__swiper-img"
                src={item.imageUrl}
                alt={item.title}
              />
              <h4 className="product__swiper-title">{item.title}</h4>
              <div className="product__swiper-buy">
                <Price price={item.price} />
                <button className="product__swiper-btn">+</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
