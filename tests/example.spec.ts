// import { test, expect, Fixtures } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('has URL', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   await expect(page).toHaveURL('https://playwright.dev/');
// });

// test('openGoogle', async ({ page }) => {
//   await page.goto('https://www.google.com');

//   await expect(page).toHaveURL('https://www.google.com');
// });

// test('открыть сайт google', async ({ page }) => {
//   await page.goto('https://www.google.com');
// });

// test('найти элемент по тексту на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const element = page.getByText('Google');
//   expect(element).toBeTruthy();
//   console.log(element);
// });

// test('найти кнопку по роли на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const button = page.getByRole('button', { name: 'Поиск в Google' });
//   expect(button).toBeTruthy();
// });

// test('найти элемент по id на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const element = page.locator('#logo');
//   expect(element).toBeTruthy();
// });

// test('найти элемент по классу на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const element = page.locator('.gb_1');
//   expect(element).toBeTruthy();
//   const titleText = await element.textContent();
//   console.log(titleText);
// });

// test('найти элемент по title на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const element = page.locator("[title = 'Google']");
//   // const titleText = await element.textContent();
//   // console.log(titleText);
//   expect(element).toBeTruthy();
// });

// test('найти элемент по комбинации локаторов на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const element = page.locator('.gb_1').getByText('Gmail');
// });

// test('фильтровать текстовые поля по атрибуту на google', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   const input = page.getByPlaceholder('Enter text').filter({ has: page.getByText('disabled') });
// });

// test('Авторицаия Genlis', async ({ page }) => {
//   await page.goto('http://genlis-dev.genome.bars.group/login');
//   await page.getByRole('textbox', { name: 'Логин' }).fill('adw');
//   await page.getByRole('textbox', { name: 'Пароль' }).fill('adw');
//   await page.getByRole('button', { name: 'Вход' }).click();
//   await expect(page).toHaveTitle(/ГЕНЛИС - DEV/);
// });

// test('клик по кнопке на example.com', async ({ page }) => {
//   await page.goto('https://example.com');
//   await page.getByRole('button', { name: 'Submit' }).click();
// });

// test('перетаскивание элемента на example.com', async ({ page }) => {
//   await page.goto('https://example.com');
//   await page.getByText('Drag me').dragTo(page.getByText('Drop here'));
// });

// test('скролл до элемента на example.com', async ({ page }) => {
//   await page.goto('https://example.com');
//   await page.getByText('Scroll to me').scrollIntoViewIfNeeded();
// });
