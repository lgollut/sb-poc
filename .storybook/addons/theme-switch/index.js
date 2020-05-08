import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';

export default makeDecorator({
  name: 'withThemeSwitch',
  parameterName: 'themeSwitch',
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();

    // Our API above sets the notes parameter to a string,
    // which we send to the channel
    channel.emit('my/customEvent', parameters);
    // we can also add subscriptions here using channel.on('eventName', callback);
    return getStory(context);
  },
});
