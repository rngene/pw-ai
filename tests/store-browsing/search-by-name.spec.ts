// spec: Search and filter products
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search and filter products', () => {
  test('should filter products by name when typing in search', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');
    
    // Expect: All six products should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
    
    // 2. Type 'head' into the search input
    await page.getByRole('textbox', { name: 'Search products' }).fill('head');
    
    // Expect: Only the 'Wireless Headphones' product card should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    
    // Expect: The other five products should not be visible
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).not.toBeVisible();
  });
});
