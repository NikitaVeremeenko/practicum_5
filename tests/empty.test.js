const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login");

test("Вход с пустыми полями", async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login("", ""); 
  
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBe("Epic sadface: Username is required"); 
});
