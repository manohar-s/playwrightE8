//-----------Hard code data-----------------------
// import {expect, test} from "@playwright/test"
// test("Login Valid",async({page})=>{

// //Login
// await page.goto("https://demowebshop.tricentis.com/")
// await page.locator('//a[text()="Log in"]').click()
// await page.locator('[name="Email"]').fill('Manohar123901@gmail.com')
// await page.locator('[name="Password"]').fill('Manohar12345')
// await page.locator('[id="RememberMe"]').check()
// await page.locator('[value="Log in"]').click()
// await page.locator('(//a[@class="account"])[1]').waitFor({state:"visible"})
// await expect(await page.locator('(//a[@class="account"])[1]')).toContainText('@gmail.com')
// await page.waitForTimeout(3000)
// })
//------------------------ Json Data------------------
// import {expect, test} from "@playwright/test"
// import data from "../../TestData/commonData.json"
// import { url } from "node:inspector"

// test("Login Valid",async({page})=>{
// //reading json data    
// let url=data.url
// let email=data.email
// let password=data.password
// //Login
// await page.goto(url)
// await page.locator('//a[text()="Log in"]').click()
// await page.locator('[name="Email"]').fill(email)
// await page.locator('[name="Password"]').fill(password)
// await page.locator('[id="RememberMe"]').check()
// await page.locator('[value="Log in"]').click()
// await page.locator('(//a[@class="account"])[1]').waitFor({state:"visible"})
// await expect(await page.locator('(//a[@class="account"])[1]')).toContainText(email)
// await page.waitForTimeout(3000)
// })

//===================POM==================================
import {expect, test} from "@playwright/test"
import data from "../../TestData/commonData.json"
import { loginpage } from "../../pages/TC_002_Login_Valid_Credential"
import { url } from "node:inspector"

test("Login Valid",async({page})=>{
//reading json data    
let url=data.url
let email=data.email
let password=data.password
//Login
let obj=new loginpage(page)
await page.goto(url)
await obj.loginlink.click()
await obj.email.fill(email)
await obj.password.fill(password)
await obj.Rememberme.check()
await obj.loginbtn.click()
await page.locator('(//a[@class="account"])[1]').waitFor({state:"visible"})
await expect(await page.locator('(//a[@class="account"])[1]')).toContainText(email)
await page.waitForTimeout(3000)
})

test.only("Login Valid Method",async({page})=>{
let obj1=new loginpage(page)
await obj1.launch(data.url)
await obj1.loginlink.click()
await obj1.login_details(data.email,data.password)
  
        
})
