import { test, expect } from '@playwright/test';

test.describe('Add to Cart Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should search for a product and add it to the cart', async ({ page }) => {
    // Search for Headphones
    await page.getByRole('textbox', { name: 'Search products' }).fill('Headphones');

    // Verify only Wireless Headphones is visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).not.toBeVisible();

    // Add Wireless Headphones to cart
    await page.getByRole('button', { name: 'Add Wireless Headphones to cart' }).click();

    // Verify the button shows confirmation
    await expect(page.getByRole('button', { name: 'Add Wireless Headphones to cart' })).toContainText('Added');

    // Verify cart badge shows 1 item
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('1');
  });

  test('should add multiple products and update cart totals', async ({ page }) => {
    // Add Wireless Headphones to cart
    await page.getByRole('button', { name: 'Add Wireless Headphones to cart' }).click();
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('1');

    // Add Coffee Maker to cart
    await page.getByRole('button', { name: 'Add Coffee Maker to cart' }).click();
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('2');

    // Open the cart
    await page.getByRole('button', { name: 'View cart' }).click();

    // Verify both items are in the cart
    await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();

    // Verify initial total ($79.99 + $49.99 = $129.98)
    await expect(page.getByText('$129.98').last()).toBeVisible();

    // Increase Wireless Headphones quantity to 2
    await page.getByRole('button', { name: 'Increase quantity of Wireless Headphones' }).click();

    // Verify quantity updated to 2
    await expect(page.getByLabel('Quantity: 2')).toBeVisible();

    // Verify updated total (2 × $79.99 + $49.99 = $209.97)
    await expect(page.getByText('$209.97')).toBeVisible();
  });
});
