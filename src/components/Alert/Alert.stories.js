/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    children: lorem.sentences(2),
  },
  decorators: [
    (story) => (
      <div style={{ maxWidth: 512, width: '100%', position: 'relative' }}>
        {story()}
      </div>
    ),
  ],
};

export const Success = ({ children, variant }) => (
  <Alert variant={variant}>{children}</Alert>
);

Success.story = {
  args: { variant: 'success' },
};

export const Warning = ({ children, variant }) => (
  <Alert variant={variant}>{children}</Alert>
);

Warning.story = {
  args: { variant: 'warning' },
};

export const Error = ({ children, variant }) => (
  <Alert variant={variant}>{children}</Alert>
);

Error.story = {
  args: { variant: 'error' },
};
