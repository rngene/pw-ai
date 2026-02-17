// spec: Search and filter products
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search and filter products', () => {
  test('should restore all products when search is cleared', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');

    // Expect: All six products should be visible (Wireless Headphones, Running Shoes, Coffee Maker, Backpack, Desk Lamp, Water Bottle)
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();

    // 2. Type 'shoes' into the search input (aria-label "Search products")
    await page.getByRole('textbox', { name: 'Search products' }).fill('shoes');

    // Expect: Only the 'Running Shoes' product card should be visible
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).not.toBeVisible();

    // 3. Clear the search input (fill with empty string)
    await page.getByRole('textbox', { name: 'Search products' }).fill('');

    // Expect: All six products should be visible again
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
  });
});
