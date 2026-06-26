
// import {expect, test} from "@playwright/test"
// test("add Employee",async({page})=>{

// //Login page
// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await page.locator('[name="username"]').fill("Admin")
// await page.locator('[name="password"]').fill("admin123")
// await page.click('//button[text()=" Login "]')
// //Home page
// await page.locator('//span[text()="PIM"]').click()
// await page.locator('//a[text()="Add Employee"]').click()
// await page.waitForTimeout(3000)
// await page.locator('[class="oxd-file-input"]').setInputFiles("D:/Playwright/OrangeHRMFW/download.jpeg")
// await page.locator('[name="firstName"]').fill("Manohar")
// await page.locator('[name="middleName"]').fill("babu")
// await page.locator('[name="lastName"]').fill('S')
// await page.locator('//button[text()=" Save "]').click()
// await page.locator('[class="oxd-text oxd-text--h6 --strong"]').waitFor({state:"visible"})
// await expect(await page.locator('[class="oxd-text oxd-text--h6 --strong"]').textContent()).toBe("Manohar S")

// })
