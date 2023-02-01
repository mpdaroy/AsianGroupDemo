

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Register extends Page {
   /**
     * define selectors using getter methods
     */
   get inputEmail () {
    return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputConfirmPassword () {
        return $('#password-confirm');
    }

    get btnRegister () {
        return $('input[type="submit"]');
    }

    get linkBacktoLogin () {
        return $('div#kc-form-options a');
    }

    get labelErrorRegister () {
        return $('.kc-feedback-text.pf-c-alert__title');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async registerUser (email, password, confirmPassFlag, confirmPass) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        if (confirmPassFlag){
            await this.inputConfirmPassword.setValue(password);
        }
        else{
            await this.inputConfirmPassword.setValue(confirmPass);
        }
        await this.btnRegister.click();
    }   

    async clickBacktoLogin (languageIndex) {
        await this.linkBacktoLogin.click();
    }
}

module.exports = new Register();
