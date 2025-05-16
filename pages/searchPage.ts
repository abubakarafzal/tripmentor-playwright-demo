import {Page, Locator} from "@playwright/test";
import dayjs = require("dayjs");

export class SearchPage {
    readonly page: Page;
    readonly oneWayBtn: Locator;
    readonly originInput: Locator;
    readonly destinationInput: Locator;
    readonly dateInput: Locator;
    readonly searchBtn: Locator;
    readonly flightResults: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.oneWayBtn = page.getByText('One Way');
        this.originInput = page.locator('[placeholder="Where from"]');
        this.destinationInput = page.locator('[placeholder="Where to"]');
        this.dateInput = page.locator('[placeholder="Date of Travel"]');
        this.searchBtn = page.getByRole('button', {name: 'Search'});
        this.flightResults = page.locator('text=Flight Results');
        this.errorMessage = page.locator('text=No Flight Found!');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async selectOneWay() {
        await this.oneWayBtn.click();
    }

    async enterOrigin(city: string) {
        await this.originInput.click();
        await this.originInput.fill(city);
        await this.page.waitForTimeout(5000); // Waits for 5 seconds
        await this.page.keyboard.press('Space');
        await this.page.locator('span:has-text("'+ city+'")').first().click();
    }

    async enterDestination(city: string) {
        await this.destinationInput.click();
        await this.destinationInput.fill(city);
        await this.page.keyboard.press('Space');
        await this.page.locator('span:has-text("'+ city+'")').first().click();

    }

    // async pickDate(date: string) {
    //     await this.dateInput.click();
    //     await this.dateInput.fill(date);
    //     await this.page.keyboard.press('Enter');
    //
    // }
    async pickDatePlusOneDay() {
        const today = dayjs();
        const targetDate = today.add(1, 'day');

        const isNextMonth = today.month() !== targetDate.month();
        const targetDay = targetDate.date();
        const targetDayText = `${targetDay}`;
        const targetSelector = `.dp__cell_inner:has-text("${targetDayText}")`;

        // Open the calendar
        await this.dateInput.click();

        // If target is in the next month, click the next button
        if (isNextMonth) {
            await this.page.locator('button[aria-label="Next month"]').click();
        }

        // Select the target day
        await this.page.locator(targetSelector).first().waitFor();
        await this.page.locator(targetSelector).first().click();
    }


    async search() {
        await this.searchBtn.click();
    }

    async expectResultsOrMessage() {
        await this.page.waitForTimeout(2000);
        const hasResults = await this.flightResults.isVisible();
        const hasError = await this.errorMessage.isVisible();
        return hasResults || hasError;
    }
}