import { test, expect } from '@playwright/test';

test.describe('Add to cart flow', () => {
  test('should search, add items to cart, update quantity, and verify total', async ({ page }) => {
    // Navigate to the store homepage
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Demo Store' })).toBeVisible();

    // Search for "Headphones" using the search bar
    await page.getByRole('textbox', { name: 'Search products' }).fill('Headphones');

    // Only Wireless Headphones should be visible
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).not.toBeVisible();

    // Add Wireless Headphones to the cart
    await page.getByRole('button', { name: 'Add Wireless Headphones to cart' }).click();
    await expect(page.getByRole('button', { name: 'Add Wireless Headphones to cart' })).toContainText('Added!');
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('1');

    // Clear search to show all products
    await page.getByRole('textbox', { name: 'Search products' }).fill('');
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();

    // Add Coffee Maker to the cart
    await page.getByRole('button', { name: 'Add Coffee Maker to cart' }).click();
    await expect(page.getByRole('button', { name: 'Add Coffee Maker to cart' })).toContainText('Added!');
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('2');

    // Open the cart
    await page.getByRole('button', { name: 'View cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();

    // Verify both items are in the cart
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();

    // Verify initial total: $79.99 + $49.99 = $129.98
    await expect(page.getByText('$129.98').last()).toBeVisible();

    // Increase quantity of Wireless Headphones to 2
    await page.getByRole('button', { name: 'Increase quantity of Wireless Headphones' }).click();
    await expect(page.getByLabel('Quantity: 2')).toContainText('2');

    // Verify updated total: (2 x $79.99) + $49.99 = $209.97
    await expect(page.getByText('$209.97')).toBeVisible();
  });
});
