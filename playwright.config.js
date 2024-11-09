const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [['html', { open: 'never' }], ['junit', { outputFile: 'test-results/results.xml' }]],
});
