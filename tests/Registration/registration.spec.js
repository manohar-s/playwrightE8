//---------------------Hard coaded data--------------------------------
// import {expect, test} from "@playwright/test"
// test("User Register",async({page})=>{

// //Register
// await page.goto("https://demowebshop.tricentis.com/")
// await page.locator("//a[text()='Register']").click()
// await page.locator('[name="FirstName"]').fill('Manohar')
// await page.locator('[name="LastName"]').fill('S')
// await page.locator('[name="Email"]').fill('Manohar123901@gmail.com')
// await page.locator('[name="Password"]').fill('Manohar12345')
// await page.locator('[name="ConfirmPassword"]').fill('Manohar12345')
// await page.click('[id="register-button"]')
// //await page.waitForTimeout(3000)
// await page.locator('[class="result"]').waitFor({state:"visible"})
// //await expect(await page.locator('[class="result"]').textContent()).toBe('Your registration completed')
// await expect(await page.locator('[class="result"]')).toContainText('Your registration completed')
// //await page.waitForTimeout(3000)

// })
//-----------------Json Data-------------------------
import {expect, test} from "@playwright/test"
import data from "../../TestData/commonData.json"
import { Workbook } from "exceljs"
import { url } from "node:inspector"
import path from "node:path"

test("User Register",async({page})=>{
let url=data.url
let email=data.email
let password=data.password

//Reading the data from Excel
//crete object for Workbook
let book=await new Workbook()
//read the data from excel->xlsx.readfile(path)
await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
//select the sheet
let sheet=await book.getWorksheet("Registration")
//select row and column
let FirstName=await sheet.getRow(2).getCell(2).toString()
let LastName=await sheet.getRow(2).getCell(3).toString()
let Gender=await sheet.getRow(2).getCell(6).toString()
//Register
await page.goto(url)
await page.locator("//a[text()='Register']").click()
await page.locator(`[value="${Gender}"]`).click()
await page.locator('[name="FirstName"]').fill(FirstName)
await page.locator('[name="LastName"]').fill(LastName)
await page.locator('[name="Email"]').fill(email)
await page.locator('[name="Password"]').fill(password)
await page.locator('[name="ConfirmPassword"]').fill(password)
await page.click('[id="register-button"]')
await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(email)
await page.locator('[class="result"]').waitFor({state:"visible"})
//await expect(await page.locator('[class="result"]').textContent()).toBe('Your registration completed')
await expect(await page.locator('[class="result"]')).toContainText('Your registration completed')
//await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)
})