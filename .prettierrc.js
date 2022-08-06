module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  phpVersion: '7.4',
  braceStyle: 'psr-2',
  tabWidth: 2,
  overrides: [
    {
      files: '*.php',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
