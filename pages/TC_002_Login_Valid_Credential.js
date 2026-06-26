import { url } from "node:inspector";

export class loginpage{
    constructor(page){
        this.page=page;
        this.loginlink=page.locator('//a[text()="Log in"]')
        this.email=page.locator('[name="Email"]')
        this.password=page.locator('[name="Password"]')
        this.Rememberme=page.locator('[id="RememberMe"]')
        this.loginbtn=page.locator('[value="Log in"]')
    }

//!used to launch the application
async launch(url){
await this.page.goto(url)
}

async login_details(email,password){
    await this.email.fill(email)
    await this.password.fill(password)
    await this.Rememberme.check()
    await this.loginbtn.click()
    
}

}



