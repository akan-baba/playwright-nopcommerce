// @ts-check
const { defineConfig, devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './e2e',
   fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html'],
  ],
  timeout: 60000,
  use: {
    baseURL: process.env.BASEURL || 'http://192.168.1.201:8085',
    actionTimeout: 10000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 300,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],slowMo: 200 },
    },

    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox',
    //     viewport: { width: 1280, height: 720 },
    //     launchOptions: {
    //       slowMo: 400  // Optional: helps debug flaky interactions
    //     } },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], slowMo: 200 },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  });

