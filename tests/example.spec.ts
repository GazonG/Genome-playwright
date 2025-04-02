import { test, expect, Fixtures } from '@playwright/test';

test.beforeEach('Авторицаия Genlis', async ({ page }) => {
  await page.goto('http://genlis-dev.genome.bars.group/login');
  await page.getByRole('textbox', { name: 'Логин' }).fill('adw');
  await page.getByRole('textbox', { name: 'Пароль' }).fill('adw');
  await page.getByRole('button', { name: 'Вход' }).click();
  await expect(page).toHaveTitle(/ГЕНЛИС - DEV/);
});

// test('Проверка сортировки', async ({ page }) => {
//   await page.getByRole('columnheader', { name: 'Дата регистрации' }).getByRole('button').click();

//   await page.getByTitle(':18:19').click();
// });

test('Создание образца', async ({ page }) => {
  test.slow(); // Увеличиваем таймаут

  // 1. Открываем форму
  await page.getByRole('button', { name: 'Добавить' }).click();
  await page.getByRole('menuitem', { name: 'Новый образец' }).click();
  //   await expect(page.getByRole('heading', { name: 'Новый образец' })).toBeVisible();

  // 2. заполняем проект
  const projectInput = page.locator('//div[text()="Проект"]/..//input').first();
  await projectInput.click();

  await page.locator('[role="option"]').first().click();
  await expect(projectInput).not.toBeEmpty();

  await page.waitForTimeout(500);

  // 3. заполняем партию
  const consigmentInput = page.locator('//div[text()="Партия"]/..//input').first();
  await consigmentInput.click();

  await page.locator('[role="option"]').first().click();
  await expect(consigmentInput).not.toBeEmpty();

  // 4. заполняем тип содержимого
  const contentTypeInput = page.locator('//div[text()="Подтип содержимого"]/..//input').first();
  await contentTypeInput.click();
  // await contentTypeInput.press('ArrowDown');
  await contentTypeInput.press('Enter');

  //5. заполняем емкость
  const containerInput = page.locator('//div[text()="Емкость"]/..//input').first();
  await containerInput.click();

  await page.locator('[role="option"]', { hasText: 'Лунка планшета Deep-well' }).click();
  await expect(containerInput).not.toBeEmpty();

  //6. генерируем штрихкод
  const barcodeGenerationButton = page.locator("//button[.//*[contains(text(), 'штрихкод')]]");
  const mainBarcodeInput = page.locator('//div[text()="Основной штрихкод"]/..//..//input');

  await barcodeGenerationButton.click();
  await expect(mainBarcodeInput).not.toBeEmpty();
  const mainBarcode = await mainBarcodeInput.inputValue();
  console.log(mainBarcode);

  //7.жмем сохранить
  const saveButton = page.locator("//button[.//*[contains(text(), 'Сохранить')]]");
  await saveButton.click();

  console.log(`Образец ${mainBarcode}`);

  await expect(page.locator("//h2[contains(text(), 'Образец ')]")).toHaveText(
    `Образец ${mainBarcode}`,
  );
});
