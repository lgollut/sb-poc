/* eslint-disable react/prop-types */
import React from 'react';
import { lorem } from 'faker';
import { Heading, Text } from '@theme-ui/components';
import { useThemeUI } from '@theme-ui/core';

const ThemeUI = ({ children }) => {
  const context = useThemeUI();
  return children(context);
};

export default {
  title: 'Design system/Values',
  includeStories: [],
};

export const Colors = () => {
  return (
    <ThemeUI>
      {({ theme }) => (
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridGap: 32,
            gridTemplateColumns: 'repeat(auto-fill, 128px)',
          }}
        >
          {Object.entries(theme.colors).map(([name, color]) => {
            if (name === 'modes') {
              return null;
            }
            return (
              <div key={name}>
                <div style={{ backgroundColor: color, height: 128 }}></div>
                <Heading as="h4" pt={2}>
                  {name}
                </Heading>
              </div>
            );
          })}
        </div>
      )}
    </ThemeUI>
  );
};

export const Typography = () => {
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
};
