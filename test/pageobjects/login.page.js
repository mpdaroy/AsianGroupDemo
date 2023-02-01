

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get checkRememberMe () {
        return $('#rememberMe');
    }

    get btnSignIn () {
        return $('#kc-login');
    }

    get linkRegister () {
        return $('div#kc-registration  a');
    }

    get linkForgotPassword () {
        return $('.login-pf-settings  a');
    }

    get labelErrorMessage(){
        return $('span#input-error');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (rememberme, username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        if (rememberme){
            await this.checkRememberMe.click();
        }
        await this.btnSignIn.click();
    }

    async registerClick(){
        await this.linkRegister.click();
    }

    async clickForgotPassword (languageIndex) {
        await this.linkForgotPassword.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {        
        browser.maximizeWindow();
        return super.open('#/domain/list');
    }


}

module.exports = new LoginPage();
