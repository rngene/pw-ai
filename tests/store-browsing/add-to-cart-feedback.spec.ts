// spec: Add to cart from product grid
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add to cart from product grid', () => {
  test('should show Added feedback when clicking add to cart', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');
    
    // Expect: All six products should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
    
    // 2. Click the 'Add to Cart' button on the 'Wireless Headphones' product
    await page.getByRole('button', { name: 'Add Wireless Headphones to' }).click();
    
    // Expect: The button text should change to show 'Added!' (the checkmark and "Added!" text)
    await expect(page.getByRole('button', { name: 'Add Wireless Headphones to' })).toContainText('Added!');
  });
});
