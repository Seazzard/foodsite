import React from 'react';
import { Admin, Resource } from 'react-admin';
import ReviewList from './ReviewList';
import ReviewEdit from './ReviewEdit';
import ReviewCreate from './ReviewCreate';
import AuthProvider from './AuthProvider';
import restProvider from 'ra-data-simple-rest';

const Administrator = () => {
  return (
    <Admin
      authProvider={AuthProvider}
      dataProvider={restProvider('http://localhost:3000')}
    >
      <Resource
        name="reviews"
        list={ReviewList}
        edit={ReviewEdit}
        create={ReviewCreate}
      />
    </Admin>
  );
};

export default Administrator;
