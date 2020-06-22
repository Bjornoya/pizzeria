import React from 'react';
import { action } from '@storybook/addon-actions';
import TextArea from '../components/TextArea/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
};

export const Empty = () => <TextArea rows={4} value="" onChange={action('onChange')} />;

export const WithText = () => <TextArea rows={4} value="Some text" onChange={action('onChange')} />;
