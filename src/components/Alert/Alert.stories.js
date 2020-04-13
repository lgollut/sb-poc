/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: { onClose: { action: 'close' } },
  args: {
    label: lorem.sentences(2),
  },
  decorators: [
    (story) => (
      <div style={{ maxWidth: 512, width: '100%', position: 'relative' }}>
        {story()}
      </div>
    ),
  ],
};

export const Success = ({ label }) => <Alert variant="success">{label}</Alert>;
export const Warning = ({ label }) => <Alert variant="warning">{label}</Alert>;
export const Error = ({ label }) => <Alert variant="error">{label}</Alert>;
export const withAction = ({ onClose, label }) => (
  <Alert onClose={onClose} variant="error">
    {label}
  </Alert>
);
