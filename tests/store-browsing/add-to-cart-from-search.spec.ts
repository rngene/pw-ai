// spec: Add to cart from product grid
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add to cart from product grid', () => {
  test('should add item to cart from filtered search results', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');
    
    // Expect: All six products should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
    
    // 2. Type 'backpack' into the search input (aria-label "Search products")
    await page.getByRole('textbox', { name: 'Search products' }).fill('backpack');
    
    // Expect: Only the 'Backpack' product card should be visible
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).not.toBeVisible();
    
    // 3. Click the 'Add to Cart' button on the 'Backpack' product (button aria-label "Add Backpack to cart")
    const addToCartButton = page.getByRole('button', { name: 'Add Backpack to cart' });
    await addToCartButton.click();
    
    // Expect: The button text should change to show 'Added!'
    await expect(addToCartButton).toContainText('Added!');
    
    // Expect: The cart badge should display '1'
    const cartButton = page.getByRole('button', { name: 'View cart' });
    await expect(cartButton.locator('span, div')).toHaveText('1');
  });
});
