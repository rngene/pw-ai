// spec: Search and filter products - should show no results message for unmatched search
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search and filter products', () => {
  test('should show no results message for unmatched search', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');
    
    // Expect: All six products should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
    
    // 2. Type 'xyznonexistent' into the search input (aria-label "Search products")
    await page.getByRole('textbox', { name: 'Search products' }).fill('xyznonexistent');
    
    // Expect: No product cards should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).not.toBeVisible();
    
    // Expect: A status element with text 'No products found matching "xyznonexistent"' should be displayed
    await expect(page.getByText('No products found matching "xyznonexistent"')).toBeVisible();
  });
});
