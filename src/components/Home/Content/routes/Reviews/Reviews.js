import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './reviews.css';

const Reviews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const [review, setReview] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    axios('http://localhost:8080/reviews').then(({ data }) => setReview(data));
  }, [add]);

  const toDate = (date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }).format(new Date(date));
  };

  const addReview = (data) => {
    axios.post('http://localhost:8080/reviews', data).then(({ data }) => {
      setAdd(!data);
      reset();
    });
  };

  return (
    <div className="reviews">
      <div className="reviews__header">
        <h2 className="reviews__title">Отзывы</h2>
        <button onClick={() => setAdd(!add)} className="reviews__btn">
          Добавить отзыв
        </button>
      </div>
      <form
        style={{ display: `${add ? 'flex' : 'none'}` }}
        onSubmit={handleSubmit(addReview)}
        className="reviews__form"
      >
        <label className="reviews__form-label">
          <input
            {...register('name', {
              required: 'Вы не ввели имя!',
              minLength: {
                value: 3,
                message: 'Имя слишком короткое!',
              },
            })}
            placeholder="Ваше имя"
            className="reviews__form-input"
            type="text"
          />
          <br />
          <span className="reviews__form-error">
            {errors?.name && errors?.name?.message}
          </span>
        </label>
        <label className="reviews__form-label">
          <textarea
            {...register('text', {
              required: 'Поле не заполнено',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            })}
            placeholder="Ваш отзыв"
            className="reviews__form-textarea"
          />
          <br />
          <span className="reviews__form-error">
            {errors?.text && errors?.text?.message}
          </span>
        </label>
        <input
          {...register('date')}
          className="reviews__form-input"
          type="hidden"
          value={toDate(Date.now())}
        />
        <div className="reviews__form-control">
          <button className="reviews__form-btn" type="submit">
            Добавить
          </button>
          <button
            onClick={() => setAdd(!add)}
            className="reviews__form-btn"
            type="reset"
          >
            Отменить
          </button>
        </div>
      </form>
      <ul className="reviews__list">
        {review.map((item) => (
          <li key={item.id} className="reviews__item">
            <div className="reviews__item-header">
              <h3 className="reviews__item-name">{item.name}</h3>
              <span className="reviews__item-date">{item.date}</span>
            </div>
            <p className="reviews__item-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
