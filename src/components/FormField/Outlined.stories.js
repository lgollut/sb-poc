/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import TextField from './TextField';

export default {
  title: 'Components/TextField/Outlined',
  component: TextField,
  decorators: [(story) => <div style={{ width: 256 }}>{story()}</div>],
  args: {
    label: lorem.words(2),
    field: {
      value: '',
      name: 'testField',
      onChange: () => {},
      onFocus: () => {},
      onBlur: () => {},
    },
    meta: {
      active: false,
      focused: false,
    },
  },
};

export const Default = ({ label, field, meta }) => (
  <TextField label={label} variant={'outlined'} field={field} meta={meta} />
);

Default.story = {};

export const Filled = ({ label, field, meta }) => (
  <TextField label={label} variant={'outlined'} field={field} meta={meta} />
);

Filled.story = {
  args: {
    field: {
      value: lorem.words(3),
    },
    meta: {
      active: true,
    },
  },
};

export const FocusedEmpty = ({ label, field, meta }) => (
  <TextField label={label} variant={'outlined'} field={field} meta={meta} />
);

FocusedEmpty.story = {
  args: {
    meta: {
      active: true,
      focused: true,
    },
  },
};

export const FocusedFilled = ({ label, field, meta }) => (
  <TextField label={label} variant={'outlined'} field={field} meta={meta} />
);

FocusedFilled.story = {
  args: {
    field: {
      value: lorem.words(3),
    },
    meta: {
      active: true,
      focused: true,
    },
  },
};
