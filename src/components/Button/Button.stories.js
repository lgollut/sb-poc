/* eslint-disable react/prop-types */
import React from 'react';

import Button from './Button';

function getButtons({ variant, children, disabled = false, onClick }) {
  const buttons = ['default', 'primary', 'secondary', 'warning', 'error'].map(
    (color) => (
      <Button
        key={`${color}-${variant}`}
        color={color}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </Button>
    )
  );

  return [
    ...buttons,
    <Button
      key={`${variant}-disabled`}
      color={'default'}
      disabled={true}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>,
  ];
}

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    color: 'default',
    disabled: false,
    variant: 'contained',
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    (story) => (
      <div
        style={{
          display: 'grid',
          gridGap: '16px',
          gridTemplateColumns: 'repeat(6, auto)',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Default = ({ onClick, children, variant, disabled, color }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>
  );
};

Default.story = {
  decorators: [],
};

export const Contained = ({ onClick, children }) =>
  getButtons({ variant: 'contained', children, onClick });

export const Text = ({ onClick, children }) =>
  getButtons({ variant: 'text', children, onClick });

export const Warning = ({ onClick, children }) =>
  getButtons({ variant: 'outlined', children, onClick });
