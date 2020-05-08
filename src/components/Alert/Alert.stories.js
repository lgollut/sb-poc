/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import { Button } from '../Button';

import Alert from './Alert';
import AlertContent from './AlertContent';
import AlertActions from './AlertActions';

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

export const WithActions = ({ onDismiss, onValidate, children, variant }) => (
  <Alert onDismiss={onDismiss} onValidate={onValidate} variant={variant}>
    <AlertContent>{children}</AlertContent>
    <AlertActions>
      <Button onClick={onValidate} variant={variant}>
        {'Validate'}
      </Button>
      <Button onClick={onDismiss} variant={variant}>
        {'Dismiss'}
      </Button>
    </AlertActions>
  </Alert>
);

WithActions.story = {
  args: { variant: 'error' },
};
