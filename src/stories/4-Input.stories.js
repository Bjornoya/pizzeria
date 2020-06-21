import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Empty = () => <Input value="" onChange={action('onChange')} />;

export const WithText = () => <Input value="Some text" onChange={action('onChange')} />;
