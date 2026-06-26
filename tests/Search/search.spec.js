import {expect, test} from "@playwright/test"
//imported the JSON File
import data from "../../TestData/commonData.json"
//import the excel file
import { Workbook } from "exceljs"
import path from "node:path"

test("Search laptop",async({page})=>{

//Reading the data from Excel
//crete object for Workbook
let book=await new Workbook()
//read the data from excel->xlsx.readfile(path)
await book.xlsx.readFile(path.join(__dirname,"../../TestData/Book1.xlsx"))
//select the sheet
let sheet=await book.getWorksheet("Search_Data")
//select row and column
let searchitem=await sheet.getRow(3).getCell(2).toString()
let expectedResult=await sheet.getRow(3).getCell(3).toString()

let url=data.url

await page.goto(url)

// let searchitem="laptop"
// let expectedResult="14.1-inch Laptop"
await page.locator('[name="q"]').fill(searchitem)
await page.keyboard.press("Enter")
//await expect(await page.locator('//a[text()="14.1-inch Laptop"]')).toHaveText("14.1-inch Laptop")
await expect(await page.locator('(//h2[@class="product-title"])[1]')).toContainText(expectedResult)

})
