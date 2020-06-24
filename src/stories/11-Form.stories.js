import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from '../components/Form/Form';

export default {
  title: 'Form',
  component: Form,
};

export const FormExample = () => (
  <div style={{ width: '450px', margin: '50px auto' }}>
    <Form onSubmit={action('onSubmit')} onChange={action('onChange')} />
  </div>
);
