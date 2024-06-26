import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';
const ReviewList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="published_at" />
        <TextField source="text" />
        <EditButton basepath="/reviews" />
        <DeleteButton basepath="/reviews" />
      </Datagrid>
    </List>
  );
};

export default ReviewList;
