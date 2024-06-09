import { test, expect } from '@playwright/test';

  test.describe('GX-123:Practice Locators',()=> {
  test.beforeEach(async ({ page }) => {
     await page.goto('https://testpages.eviltester.com/styled/find-by-playground-test.html')

  })

  test('TC1: Validar seleccionar un selector',async ({ page })=>{
      expect(1).toBe(1)
      const container = page.locator('[name=linkdivname]')
      await expect (container).toBeVisible()
  });

  test('TC2:Realizar click en selector', async({ page })=>{
      const container2 = page.locator('#a26')
      await expect(container2).toBeVisible()
     await container2.click()

  })
})

  test.describe('Validar pagina',()=>{
  
  test('TC3:Validar números ingresados', async({ page })=>
    {
      
        await page.goto('https://testpages.eviltester.com/styled/index.html')
        await page.locator('#webdriverexamplepage').click()
        const numInput= page.locator('[name="number-entry"]')
        const buttomInput= page.locator('[data-locator=process-on-server]')
        const messageNumber= page.locator('[data-locator=message-text]')
        await numInput.fill('12345')
        await buttomInput.click()
        await expect (messageNumber).toHaveText('one, two, three, four, five')
        await numInput.fill('54321')
        await buttomInput.click()
        await expect (messageNumber).toHaveText('five, four, three, two, one')



    })
  
 })


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

