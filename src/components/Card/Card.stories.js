/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';

import Card from './Card';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardMedia from './CardMedia';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardTitle, CardContent, CardMedia },
  decorators: [(story) => <div style={{ maxWidth: '512px' }}>{story()}</div>],
  args: {
    title: capitalize(lorem.words(2)),
    subtitle: lorem.sentence(),
    content: lorem.paragraph(),
    media: 'https://picsum.photos/seed/picsum/512/384',
  },
};

export const Default = ({ title, subtitle, content }) => (
  <Card>
    <CardTitle primary={title} secondary={subtitle} />
    <CardContent>{content}</CardContent>
  </Card>
);

export const Primary = ({ title, subtitle, content }) => (
  <Card variant="primary">
    <CardTitle primary={title} secondary={subtitle} />
    <CardContent>{content}</CardContent>
  </Card>
);

export const Secondary = ({ title, subtitle, content }) => (
  <Card variant="secondary">
    <CardTitle primary={title} secondary={subtitle} />
    <CardContent>{content}</CardContent>
  </Card>
);

export const Media = ({ title, subtitle, content, media }) => (
  <Card>
    <CardMedia image={media} />
    <CardTitle primary={title} secondary={subtitle} />
    <CardContent>{content}</CardContent>
  </Card>
);
