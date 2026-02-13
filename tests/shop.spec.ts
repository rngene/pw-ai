import { test, expect } from '@playwright/test';

test('homepage shows all products', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Demo Store')).toBeVisible();
  await expect(page.getByTestId('product-1')).toBeVisible();
  await expect(page.getByTestId('product-6')).toBeVisible();
});
