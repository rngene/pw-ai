# Store Items Browsing

## Application Overview

Test plan for the Demo Store's product browsing functionality, covering the product grid display, search/filtering, product card details, and add-to-cart interactions from the shop view.

## Test Scenarios

### 1. Product grid display

**Seed:** `tests/seed.spec.ts`

#### 1.1. should display all six products on initial load

**File:** `tests/store-browsing/display-all-products.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: The page title should be 'demo-store'
    - expect: The heading 'Demo Store' should be visible
  2. -
    - expect: Six product cards should be visible: Wireless Headphones, Running Shoes, Coffee Maker, Backpack, Desk Lamp, and Water Bottle

#### 1.2. should show product name, category, price, and add to cart button for each product

**File:** `tests/store-browsing/product-card-details.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: The page loads with the product grid visible
  2. -
    - expect: The 'Wireless Headphones' card should display category 'Electronics', price '$79.99', and an 'Add to Cart' button
    - expect: The 'Running Shoes' card should display category 'Footwear', price '$124.99', and an 'Add to Cart' button
    - expect: The 'Coffee Maker' card should display category 'Kitchen', price '$49.99', and an 'Add to Cart' button
    - expect: The 'Backpack' card should display category 'Accessories', price '$59.99', and an 'Add to Cart' button
    - expect: The 'Desk Lamp' card should display category 'Home Office', price '$34.99', and an 'Add to Cart' button
    - expect: The 'Water Bottle' card should display category 'Fitness', price '$19.99', and an 'Add to Cart' button

### 2. Search and filter products

**Seed:** `tests/seed.spec.ts`

#### 2.1. should filter products by name when typing in search

**File:** `tests/store-browsing/search-by-name.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: All six products should be visible
  2. Type 'head' into the search input
    - expect: Only the 'Wireless Headphones' product card should be visible
    - expect: The other five products should not be visible

#### 2.2. should filter products by category when typing in search

**File:** `tests/store-browsing/search-by-category.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: All six products should be visible
  2. Type 'kitchen' into the search input
    - expect: Only the 'Coffee Maker' product card should be visible
    - expect: The other five products should not be visible

#### 2.3. should show no results message for unmatched search

**File:** `tests/store-browsing/search-no-results.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: All six products should be visible
  2. Type 'xyznonexistent' into the search input
    - expect: No product cards should be visible
    - expect: A status message 'No products found matching "xyznonexistent"' should be displayed

#### 2.4. should restore all products when search is cleared

**File:** `tests/store-browsing/search-clear.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: All six products should be visible
  2. Type 'shoes' into the search input
    - expect: Only the 'Running Shoes' product card should be visible
  3. Clear the search input
    - expect: All six products should be visible again

### 3. Add to cart from product grid

**Seed:** `tests/seed.spec.ts`

#### 3.1. should show 'Added!' feedback when clicking add to cart

**File:** `tests/store-browsing/add-to-cart-feedback.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: All six products should be visible
  2. Click the 'Add to Cart' button on the 'Wireless Headphones' product
    - expect: The button text should change to 'Added!'

#### 3.2. should update cart badge count when adding items

**File:** `tests/store-browsing/add-to-cart-badge.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: The cart button should show '🛒 Cart' with no badge count
  2. Click the 'Add to Cart' button on the 'Wireless Headphones' product
    - expect: The cart badge should display '1'
  3. Click the 'Add to Cart' button on the 'Coffee Maker' product
    - expect: The cart badge should display '2'

#### 3.3. should add item to cart from filtered search results

**File:** `tests/store-browsing/add-to-cart-from-search.spec.ts`

**Steps:**
  1. Navigate to the store homepage
    - expect: All six products should be visible
  2. Type 'backpack' into the search input
    - expect: Only the 'Backpack' product card should be visible
  3. Click the 'Add to Cart' button on the 'Backpack' product
    - expect: The button text should change to 'Added!'
    - expect: The cart badge should display '1'
