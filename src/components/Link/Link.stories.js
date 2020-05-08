/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  args: { label: lorem.words(2), href: '#!' },
};

export const Default = ({ href, label }) => <Link href={href}>{label}</Link>;

export const Secondary = ({ href, label }) => (
  <Link href={href} variant="secondary">
    {label}
  </Link>
);
