module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    })
    return config;
  }
}
