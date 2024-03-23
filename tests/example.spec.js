import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pollmill.com/f/female-artist-of-the-year-gcma-2024-a-j-4wdhcwt/answers/new');
  await page.getByLabel('Deseray and Jus Dri Flatline').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Answer to this poll' })
  await page.getByRole('link', { name: 'Answer to this poll' }).click();
});