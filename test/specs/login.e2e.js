const LoginPage = require('../pageobjects/login.page')
const DashboardPage = require('../pageobjects/dashboard.page')

describe('Login feature validations', () => {
    it('TC1 - As a user, it should be able to select language on dropdown - JP', async () => {
        await LoginPage.open()
        await LoginPage.selectLanguage(1);
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('アカウントにサインインする');
        await expect(LoginPage.linkLanguages).toHaveTextContaining('日本語');
    })

    it('TC1 - As a user, it should be able to select language on dropdown - KR', async () => {
        await LoginPage.open()
        await LoginPage.selectLanguage(2);
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('계정에 로그인');  
        await expect(LoginPage.linkLanguages).toHaveTextContaining('kr');
    })

    it('TC1 - As a user, it should be able to select language on dropdown - CN', async () => {
        await LoginPage.open()
        await LoginPage.selectLanguage(4);
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('登录到您的帐户');
        await expect(LoginPage.linkLanguages).toHaveTextContaining('中文简体');
    })

    it('TC1 - As a user, it should be able to select language on dropdown - EN', async () => {
        await LoginPage.open()
        await LoginPage.selectLanguage(3);
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('Sign in to your account');
        await expect(LoginPage.linkLanguages).toHaveTextContaining('English');
    })

    it('TC2 - As a user, it should prompt error message when email is misspelled, blank or invalid', async () => {
        await LoginPage.open()
        let username = "testmarkA1@yopmail.com";
        let password = "Testing123";
        await LoginPage.login (false, username, password)
        await expect(LoginPage.labelErrorMessage).toBeExisting();
        await expect(LoginPage.labelErrorMessage).toHaveTextContaining('Invalid username or password.');
        username = "";
        await LoginPage.login (false, username, password)
        await expect(LoginPage.labelErrorMessage).toBeExisting();
        await expect(LoginPage.labelErrorMessage).toHaveTextContaining('Invalid username or password.');
        username = "testmarkA1yopmail.com";
        await LoginPage.login (false, username, password)
        await expect(LoginPage.labelErrorMessage).toBeExisting();
        await expect(LoginPage.labelErrorMessage).toHaveTextContaining('Invalid username or password.');
    })

    it('TC3 - As a user, it should prompt error message when password is blank or incorrect', async () => {
        await LoginPage.open()
        let username = "testmark@yopmail.com";
        let password = "";
        await LoginPage.login (false, username, password)
        await expect(LoginPage.labelErrorMessage).toBeExisting();
        await expect(LoginPage.labelErrorMessage).toHaveTextContaining('Invalid username or password.');
        password = "Testing12344";
        await LoginPage.login (false, username, password)
        await expect(LoginPage.labelErrorMessage).toBeExisting();
        await expect(LoginPage.labelErrorMessage).toHaveTextContaining('Invalid username or password.');
    })

    it('TC4 - As a user, it should load Forgot Password page when click forgot password link', async () => {
        await LoginPage.open()
        await LoginPage.clickForgotPassword();
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('Forgot Your Password?');
    })

    it('TC5 - As a user, it should navigate to Register Page when clicking on Register link', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('Register');
    })

    it('TC8 - As a user, it should be able to Login successfully', async () => {
        await LoginPage.open()
        let username = "testmark@yopmail.com";
        let password = "Testing123";
        await LoginPage.login (false, username, password)
        await expect(DashboardPage.avatarUser).toBeExisting();
        await DashboardPage.clickLogout();
    })

    it('TC6 - As a user, it should store credentials when remember me checkbox is checked', async () => {
        await LoginPage.open()
        let username = "testmark@yopmail.com";
        let password = "Testing123";
        await LoginPage.login (true, username, password)
        await expect(DashboardPage.avatarUser).toBeExisting();
        await browser.deleteCookies();
        await LoginPage.open();
        await expect(DashboardPage.avatarUser).toBeExisting();
        await DashboardPage.clickLogout();
    })

    it('TC7 - As a user, it should NOT store credentials when remember me checkbox is unchecked', async () => {
        await LoginPage.open()
        let username = "testmark@yopmail.com";
        let password = "Testing123";
        await LoginPage.login (false, username, password)
        await expect(DashboardPage.avatarUser).toBeExisting();
        await browser.deleteCookies();
        await LoginPage.open();
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('Sign in to your account');
        await DashboardPage.clickLogout();
    })
    
   
    
})


