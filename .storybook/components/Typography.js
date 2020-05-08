import React from 'react';
import { Heading, Text } from 'theme-ui';
import { lorem } from 'faker';

export function Typography() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1024 }}>
      <div style={{ paddingBottom: '32px' }}>
        <Heading as="h3" pb={3}>
          {'Page title'}
        </Heading>
        <Heading variant="pageTitle">{lorem.sentence()}</Heading>
      </div>
      <div style={{ paddingBottom: '32px' }}>
        <Heading as="h3" pb={3}>
          {'Default text'}
        </Heading>
        <Text variant="default">{lorem.paragraphs(3)}</Text>
      </div>
      <div style={{ paddingBottom: '32px' }}>
        <Heading as="h3" pb={3}>
          {'Small text'}
        </Heading>
        <Text variant="small">{lorem.paragraphs(1)}</Text>
      </div>
      <div style={{ paddingBottom: '32px' }}>
        <Heading as="h3" pb={3}>
          {'Button label'}
        </Heading>
        <Text variant="button">{lorem.words(2)}</Text>
      </div>
    </div>
  );
}
