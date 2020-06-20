import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button onClick={action('clicked')}>Primary Button</Button>;

export const Disabled = () => <Button disabled>Disabled Button</Button>;
