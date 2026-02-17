// spec: Product grid display
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product grid display', () => {
  test('should display all six products on initial load', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');
    
    // Expect: The page title should be 'demo-store'
    await expect(page).toHaveTitle('demo-store');
    
    // Expect: The heading 'Demo Store' should be visible
    await expect(page.getByRole('heading', { name: 'Demo Store' })).toBeVisible();
    
    // 2. Verify all products are shown
    // Expect: Six product cards should be visible: Wireless Headphones, Running Shoes, Coffee Maker, Backpack, Desk Lamp, and Water Bottle
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
  });
});
