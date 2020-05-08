import React from 'react';
import { Heading, Text, Box, Flex, useThemeUI } from 'theme-ui';

function RenderColor() {
  const { theme } = useThemeUI();

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      {Object.entries(theme.colors).map(([name, color]) => {
        if (name === 'modes') {
          return null;
        }
        return (
          <Flex
            key={name}
            sx={{
              height: ['auto', 8, 10],
              mb: 3,
              flexDirection: ['column', 'row'],
            }}
          >
            <Box sx={{ flexBasis: ['auto', 12], pb: [3, 0] }}>
              <Heading as="h4">{name}</Heading>
            </Box>
            <Flex
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexBasis: [8, 'auto'],
                flexGrow: '1',
              }}
            >
              <div
                style={{
                  backgroundColor: color,
                  height: 128,
                  boxShadow: theme.shadows[3],
                  width: '100%',
                }}
              />
              <Text variant="small" mt={2}>
                {color}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </div>
  );
}

export function Colors() {
  return <RenderColor />;
}
