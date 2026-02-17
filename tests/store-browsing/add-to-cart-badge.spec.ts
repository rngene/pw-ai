// spec: Add to cart from product grid - should update cart badge count when adding items
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Add to cart from product grid', () => {
  test('should update cart badge count when adding items', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');
    
    // Expect: The 'View cart' button should be visible and show no badge count initially
    await expect(page.getByRole('button', { name: 'View cart' })).toBeVisible();
    
    // 2. Click the 'Add to Cart' button on the 'Wireless Headphones' product (button aria-label "Add Wireless Headphones to cart")
    await page.getByRole('button', { name: 'Add Wireless Headphones to' }).click();
    
    // Expect: The cart badge should display '1'
    const cartButton = page.getByRole('button', { name: 'View cart' });
    await expect(cartButton.locator('.cart-badge')).toHaveText('1');

    // 3. Click the 'Add to Cart' button on the 'Coffee Maker' product (button aria-label "Add Coffee Maker to cart")
    await page.getByRole('button', { name: 'Add Coffee Maker to cart' }).click();

    // Expect: The cart badge should display '2'
    await expect(cartButton.locator('.cart-badge')).toHaveText('2');
  });
});
