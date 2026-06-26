//******************************HARD CODED DATA******************** */
import {test,expect} from '@playwright/test'

test('User Registration',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('[class="ico-login"]')

    let Email = "Manohar1239011@gmail.com"
    let Password = "Manohar12345"

    //? lOGGING in
    await page.fill('[id="Email"]',Email)
    await page.fill('[id="Password"]',Password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')

    //? Cliking on Computers
    await page.locator('//a[contains(text(),"Computers")]').first().hover()
    await page.locator('//a[contains(text(),"Desktops")]').first().click()
    await page.click('(//h2[@class="product-title"])[2]')

    //? Selecting processor from dropdown
    await page.locator('[id="product_attribute_16_5_4"]').selectOption({value:"14"})


    //?Selecting a RAM from drop down
    await page.locator('[id="product_attribute_16_6_5"]').selectOption({value:"17"})

    //? Choosing HDD
    await page.click('[value="19"]')

    //?Chhosing OS
    await page.click('[value="21"]')
    await page.click('//input[@id="add-to-cart-button-16"]')

    //? validating the message
    await page.locator('//p[text()="The product has been added to your "]').waitFor()
    let success=await page.locator('//p[text()="The product has been added to your "]').textContent()
    await expect(success).toContain('The product has been added')
 
}) 

//================================
// import {test,expect} from '@playwright/test'
// import data from "../../TestData/commonData.json"

// test('User Registration',async({page})=>{

//      //? READING JSON DATA
//     let url=data.url
//     let email=data.email
//     let password= data.password

//     await page.goto(url)
//     await page.click('[class="ico-login"]')


//     //? lOGGING in
//     await page.fill('[id="Email"]',email)
//     await page.fill('[id="Password"]',password)
//     await page.check('[id="RememberMe"]')
//     await page.click('[value="Log in"]')

//    const excel = new ExcelBook();

//     let processor = await excel.getCellData("Computer_Config", 2, 2);
//     let ram = await excel.getCellData("Computer_Config", 2, 3);
//     let hdd = await excel.getCellData("Computer_Config", 2, 4);
//     let os = await excel.getCellData("Computer_Config", 2, 5);
//     let expectedMsg = await excel.getCellData("Computer_Config", 2, 6);

//       await page.locator('[id="product_attribute_16_5_4"]').selectOption({ value: processor });
      
//       await page.locator('[id="product_attribute_16_6_5"]').selectOption({ value: ram });
      
//       await page.click(`[value="${hdd}"]`);
      
//       await page.click(`[value="${os}"]`);
      
//       await page.click('//input[@id="add-to-cart-button-16"]');
      
//       await page.locator('//p[text()="The product has been added to your "]').waitFor();
      
//       let success = await page.locator('//p[text()="The product has been added to your "]').textContent();
      
//       await expect(success).toContain(expectedMsg);


  

// }) 


