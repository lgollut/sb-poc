/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: { label: lorem.words(2) },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Default = ({ onClick, label }) => (
  <Button onClick={onClick} variant={'default'}>
    {label}
  </Button>
);

export const Primary = ({ onClick, label }) => (
  <Button onClick={onClick} variant="primary">
    {label}
  </Button>
);
