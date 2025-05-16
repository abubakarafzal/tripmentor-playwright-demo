import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report' }]
    ],
    use: {
        browserName: 'chromium',
        headless: false,
        video: 'on',
        screenshot: 'only-on-failure',
        permissions: ["clipboard-read"],
        actionTimeout: 10000,
        baseURL: 'https://web.demotm.journeymentor.net',
        navigationTimeout: 300000
    },
    projects: [
        {
            name: 'Chrome',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});