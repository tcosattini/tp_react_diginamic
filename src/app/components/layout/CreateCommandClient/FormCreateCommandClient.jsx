import React from 'react';
import { Form } from 'react-router-dom';
import './FormCreateCommandClient.css';

const FormCreateCommandClient = () => {
  return (
    <Form method="post" action="/events">
        <input type="text" name="title" />
        <input type="text" name="description" />
        <button type="submit">Create</button>
    </Form>
  );
};

export default FormCreateCommandClient;
