import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import testData from "../fixtures/testData.json";

test('Search a flight using valid data', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.selectOneWay();
    await searchPage.enterOrigin(testData.flight_from);
    await searchPage.enterDestination(testData.flight_to);
    await searchPage.pickDatePlusOneDay();
    await searchPage.search();
    const isSuccess = await searchPage.expectResultsOrMessage();
    expect(isSuccess).toBeTruthy();
});
