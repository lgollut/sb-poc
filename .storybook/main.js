module.exports = {
  stories: ['../src/Introduction.stories.mdx', '../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-contexts/register',
    '@storybook/addon-toolbars',
    '@storybook/addon-actions',
  ],
};
