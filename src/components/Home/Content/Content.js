import React from 'react';
import Header from './Header';
import './header.css';
import { Route, Routes } from 'react-router-dom';
import Pizza from './routes/Pizza';
import Sets from './routes/Sets';
import Wok from './routes/Wok';
import Rolls from './routes/Rolls';
import Sushi from './routes/Sushi';
import Salads from './routes/Salads';
import Soups from './routes/Soups';
import Corndogs from './routes/Corndogs';
import Drinks from './routes/Drinks';
import Sale from './routes/Sale';
import Main from './routes/Main/Main';
import Product from './Product/Product';
import Reviews from './routes/Reviews/Reviews';
import Delivery from './routes/Delivery/Delivery';
import Footer from './Footer/Footer';
import ContentLayout from './ContentLayout/ContentLayout';

const Content = () => {
  return (
    <section className="home__content">
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ContentLayout />}>
              <Route path="" element={<Main />} />
              <Route path="pizza" element={<Pizza />} />
              <Route path="sets" element={<Sets />} />
              <Route path="wok" element={<Wok />} />
              <Route path="rolls" element={<Rolls />} />
              <Route path="sushi" element={<Sushi />} />
              <Route path="salad" element={<Salads />} />
              <Route path="soup" element={<Soups />} />
              <Route path="corndog" element={<Corndogs />} />
              <Route path="drink" element={<Drinks />} />
              <Route path="sale" element={<Sale />} />
            </Route>
            <Route path="/:path/product/:id" element={<Product />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Content;
