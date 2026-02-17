// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product grid display', () => {
  test('should show product name, category, price, and add to cart button for each product', async ({ page }) => {
    // 1. Navigate to the store homepage
    await page.goto('http://localhost:5174');

    // 2. Verify each product card shows correct details: The 'Wireless Headphones' card should display category 'Electronics', price '$79.99', and an 'Add to Cart' button
    await expect(page.getByRole('heading', { name: 'Wireless Headphones' })).toBeVisible();
    await expect(page.getByText('Electronics')).toBeVisible();
    await expect(page.getByText('$79.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Wireless Headphones to cart' })).toBeVisible();

    // 2. Verify each product card shows correct details: The 'Running Shoes' card should display category 'Footwear', price '$124.99', and an 'Add to Cart' button
    await expect(page.getByRole('heading', { name: 'Running Shoes' })).toBeVisible();
    await expect(page.getByText('Footwear')).toBeVisible();
    await expect(page.getByText('$124.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Running Shoes to cart' })).toBeVisible();

    // 2. Verify each product card shows correct details: The 'Coffee Maker' card should display category 'Kitchen', price '$49.99', and an 'Add to Cart' button
    await expect(page.getByRole('heading', { name: 'Coffee Maker' })).toBeVisible();
    await expect(page.getByText('Kitchen')).toBeVisible();
    await expect(page.getByText('$49.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Coffee Maker to cart' })).toBeVisible();

    // 2. Verify each product card shows correct details: The 'Backpack' card should display category 'Accessories', price '$59.99', and an 'Add to Cart' button
    await expect(page.getByRole('heading', { name: 'Backpack' })).toBeVisible();
    await expect(page.getByText('Accessories')).toBeVisible();
    await expect(page.getByText('$59.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Backpack to cart' })).toBeVisible();

    // 2. Verify each product card shows correct details: The 'Desk Lamp' card should display category 'Home Office', price '$34.99', and an 'Add to Cart' button
    await expect(page.getByRole('heading', { name: 'Desk Lamp' })).toBeVisible();
    await expect(page.getByText('Home Office')).toBeVisible();
    await expect(page.getByText('$34.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Desk Lamp to cart' })).toBeVisible();

    // 2. Verify each product card shows correct details: The 'Water Bottle' card should display category 'Fitness', price '$19.99', and an 'Add to Cart' button
    await expect(page.getByRole('heading', { name: 'Water Bottle' })).toBeVisible();
    await expect(page.getByText('Fitness')).toBeVisible();
    await expect(page.getByText('$19.99')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Water Bottle to cart' })).toBeVisible();
  });
});
