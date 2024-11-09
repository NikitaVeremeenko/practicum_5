const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login");
const ProductsPage = require("../pages/products");

test("Добавление одного товара в корзину", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

  const productName = "Sauce Labs Backpack";
  await productsPage.addProductToCart(productName);

  const cartItemCount = await productsPage.getCartItemCount();

  expect(cartItemCount).toBe(1);
});
