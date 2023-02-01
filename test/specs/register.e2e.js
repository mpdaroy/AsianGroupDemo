const LoginPage = require('../pageobjects/login.page')
const RegisterPage = require('../pageobjects/register.page')
const DashboardPage = require('../pageobjects/dashboard.page')

const Faker = require("@faker-js/faker");

describe('Register feature validations', () => {
    it('TC1 - As a user, It should be able to click register link', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await expect(RegisterPage.btnRegister).toBeExisting();
        await expect(RegisterPage.labelPageTitle).toBeExisting();
        await expect(RegisterPage.labelPageTitle).toHaveTextContaining('Register');        
    })    

    it('TC3 - As a user, It should prompt error message when email is blank', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        let email = "";
        let password = Faker.faker.internet.password();
        await RegisterPage.registerUser(email, password, true);
        await expect(RegisterPage.labelErrorRegister).toBeExisting();
        await expect(RegisterPage.labelErrorRegister).toHaveTextContaining('Please specify username.\nPlease specify email.');
    })

    it('TC3 - As a user, It should prompt error message when email is invalid', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        let email = "randomemail.io";
        let password = Faker.faker.internet.password();
        await RegisterPage.registerUser(email, password, true);
        await expect(RegisterPage.labelErrorRegister).toBeExisting();
        await expect(RegisterPage.labelErrorRegister).toHaveTextContaining('Invalid email address.');
    })

    it('TC4 - As a user, It should prompt error message when password is blank', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        let email = Faker.faker.internet.email();
        let password = ""
        await RegisterPage.registerUser(email, password, true);
        await expect(RegisterPage.labelErrorRegister).toBeExisting();
        await expect(RegisterPage.labelErrorRegister).toHaveTextContaining('Please specify password.');
    })

    it('TC5 - As a user, It should prompt error message when confirm password is blank', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        let email = Faker.faker.internet.email();
        let password = Faker.faker.internet.password();
        await RegisterPage.registerUser(email, password, false, "");
        await expect(RegisterPage.labelErrorRegister).toBeExisting();
        await expect(RegisterPage.labelErrorRegister).toHaveTextContaining('Password confirmation doesn\'t match.');
    })

    it('TC5 - As a user, It should prompt error message when confirm password is mismatch', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        let email = Faker.faker.internet.email();
        let password = Faker.faker.internet.password();
        await RegisterPage.registerUser(email, password, false, "PasswordMismatch");
        await expect(RegisterPage.labelErrorRegister).toBeExisting();
        await expect(RegisterPage.labelErrorRegister).toHaveTextContaining('Password confirmation doesn\'t match.');
    })

    it('TC6 - As a user, it should be able to select language in registering - JP', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await RegisterPage.selectLanguage(1);
        await expect(RegisterPage.labelPageTitle).toBeExisting();
        await expect(RegisterPage.labelPageTitle).toHaveTextContaining('登録');
        await expect(RegisterPage.linkLanguages).toHaveTextContaining('日本語');
    })

    it('TC6 - As a user, it should be able to select language in registering - KR', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await RegisterPage.selectLanguage(2);
        await expect(RegisterPage.labelPageTitle).toBeExisting();
        await expect(RegisterPage.labelPageTitle).toHaveTextContaining('등록하다');  
        await expect(RegisterPage.linkLanguages).toHaveTextContaining('kr');
    })

    it('TC6 - As a user, it should be able to select language in registering - EN', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await RegisterPage.selectLanguage(3);
        await expect(RegisterPage.labelPageTitle).toBeExisting();
        await expect(RegisterPage.labelPageTitle).toHaveTextContaining('Register');
        await expect(RegisterPage.linkLanguages).toHaveTextContaining('English');
    })

    it('TC6 - As a user, it should be able to select language in registering - CN', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await RegisterPage.selectLanguage(4);
        await expect(RegisterPage.labelPageTitle).toBeExisting();
        await expect(RegisterPage.labelPageTitle).toHaveTextContaining('注册');
        await expect(RegisterPage.linkLanguages).toHaveTextContaining('中文简体');
    })    

    it('TC7 - As a user, it should be able to click back to Login when on Register page', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        await RegisterPage.clickBacktoLogin();
        await expect(LoginPage.btnSignIn).toBeExisting();
        await expect(LoginPage.labelPageTitle).toBeExisting();
        await expect(LoginPage.labelPageTitle).toHaveTextContaining('Sign in to your account');
    })

    it('TC2 - As a user, It should be able to successfully registered after inputting all fields', async () => {
        await LoginPage.open()
        await LoginPage.registerClick();
        let email = Faker.faker.internet.email();
        let password = Faker.faker.internet.password();
        await RegisterPage.registerUser(email, password, true);
        await expect(DashboardPage.avatarUser).toBeExisting();        
    })
})
