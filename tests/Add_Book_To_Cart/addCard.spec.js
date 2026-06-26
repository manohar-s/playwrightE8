import {expect, test} from "@playwright/test"
import data from "../../TestData/commonData.json"
import { url } from "node:inspector"
import { Workbook } from "exceljs"
import path from "node:path"

test("Login Valid",async({page})=>{
//reading json data    
let url=data.url
let email=data.email
let password=data.password
//Login
await page.goto(url)

//Reading the data from Excel
//crete object for Workbook
let book=await new Workbook()
//read the data from excel->xlsx.readfile(path)
await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
//select the sheet
let sheet=await book.getWorksheet("Cart_Data")
//select row and column
let searchitem=await sheet.getRow(2).getCell(2).toString()
let ExpectedSuccessMessage=await sheet.getRow(2).getCell(3).toString()


await page.locator('//a[text()="Log in"]').click()
await page.locator('[name="Email"]').fill(email)
await page.locator('[name="Password"]').fill(password)
await page.locator('[id="RememberMe"]').check()
await page.locator('[value="Log in"]').click()
await page.locator('(//a[@class="account"])[1]').waitFor({state:"visible"})
await expect(await page.locator('(//a[@class="account"])[1]')).toContainText(email)

   //?Go to books category
await page.click('(//a[@href="/books"])[1]')
await page.click('(//h2[@class="product-title"])[1]')

 //? Targettiungv shopping cart
await page.click('[id="add-to-cart-button-13"]')
let countText = await page.locator('[class="cart-qty"]').textContent()
let count = parseInt(countText.replace(/\D/g, ""), 10)

//let success = "The product has been added to your shopping cart"
await page.locator('[id="bar-notification"]').waitFor({state:"visible"})
await expect(await page.locator('[id="bar-notification"]').textContent()).toContain(ExpectedSuccessMessage)

await expect(await page.locator('[class="cart-qty"]').textContent()).toBe(`(${count + 1})`)
if(await page.locator('[class="cart-qty"]').textContent()>count)
console.log("Cart value increased from ",count," to ",await page.locator('[class="cart-qty"]').textContent());

})
