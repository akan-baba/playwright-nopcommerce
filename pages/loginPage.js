export class loginPage {
    constructor(page) {
        this.page = page;
    }

    // Web selectors for locating elements on the page.
    get webSelectors() {
        return {
            loginLink: '.ico-login',
            userName: '#Username',
            password: '#Password',
            loginBtn: "button[class='button-1 login-button']",
            LogOutLink: ".ico-logout",
            forgotPwdLink: "a[href='/passwordrecovery']",
            recoverBtn: "button[name='send-email']",
            email:'#Email',
            recoverPwdMessage: '.result',
            validationMessage:'.content'

        };
    }

    // Page actions to interact with the web elements on the page.
    get pageActions() {
        return {
            clickLoginlink: () => this.page.locator(this.webSelectors.loginLink),
            enterUserName: () => this.page.locator(this.webSelectors.userName),
            enterPassword: () => this.page.locator(this.webSelectors.password),
            clickLoginBtn: () => this.page.locator(this.webSelectors.loginBtn),
            forgotPwd: () => this.page.locator(this.webSelectors.forgotPwdLink),
            recoverBtn: () => this.page.locator(this.webSelectors.recoverBtn),
            enterEmail: () => this.page.locator(this.webSelectors.email),
            verifyMessage: () => this.page.locator(this.webSelectors.validationMessage),
            logOut: async () => {
                const logoutBtn = this.page.locator(this.webSelectors.LogOutLink);
                await logoutBtn.waitFor({ state: 'visible', timeout: 10000 });
                await logoutBtn.click();
            }





        };
    }
}


