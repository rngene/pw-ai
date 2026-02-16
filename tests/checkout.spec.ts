import { test, expect } from '@playwright/test';

test.describe('Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should complete checkout with multiple items', async ({ page }) => {
    // Add Wireless Headphones to cart
    await page.getByRole('button', { name: 'Add Wireless Headphones to cart' }).click();
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('1');

    // Add Coffee Maker to cart
    await page.getByRole('button', { name: 'Add Coffee Maker to cart' }).click();
    await expect(page.getByRole('button', { name: 'View cart' })).toContainText('2');

    // Open the cart
    await page.getByRole('button', { name: 'View cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();

    // Increase Wireless Headphones quantity to 2
    await page.getByRole('button', { name: 'Increase quantity of Wireless Headphones' }).click();
    await expect(page.getByLabel('Quantity: 2')).toBeVisible();

    // Verify cart total before checkout
    await expect(page.getByText('$209.97')).toBeVisible();

    // Proceed to checkout
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
    await expect(page.getByRole('heading', { name: 'Shipping Information' })).toBeVisible();

    // Verify order summary is shown
    await expect(page.getByText('3 items — $209.97')).toBeVisible();

    // Fill in the checkout form
    await page.getByRole('textbox', { name: 'First Name' }).fill('Jane');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email' }).fill('jane.doe@test.com');
    await page.getByRole('textbox', { name: 'Address' }).fill('123 Test Street');
    await page.getByRole('textbox', { name: 'City' }).fill('Testville');
    await page.getByRole('textbox', { name: 'ZIP Code' }).fill('12345');

    // Place the order
    await page.getByRole('button', { name: 'Place Order' }).click();

    // Verify order confirmation
    await expect(page.getByRole('heading', { name: 'Order Confirmed!' })).toBeVisible();
    await expect(page.getByText('Thank you for your purchase.')).toBeVisible();
    await expect(page.getByText(/Order #\d+/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();

    // Verify cart is now empty
    await expect(page.getByRole('button', { name: 'View cart' })).not.toContainText(/\d/);
  });
});
