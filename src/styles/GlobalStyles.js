import React from 'react';
import { Global } from '@emotion/core';
import { css } from '@theme-ui/css';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme) =>
        css({
          '*': {
            boxSizing: 'border-box',
            fontFamily: 'body',
          },
          'html, body': {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
          },
          body: {
            fontSize: 2,
          },
          '#app-root': {
            minHeight: '100%',
          },
        })(theme)
      }
    />
  );
}
