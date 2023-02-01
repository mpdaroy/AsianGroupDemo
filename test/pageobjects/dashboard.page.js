

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Register extends Page {
   /**
     * define selectors using getter methods
     */
    get avatarUser () {
        return $('.vue-avatar--wrapper');
    }
    get btnLogout () {
        return $('a:nth-of-type(4) > .btn');
    }

    

    async clickLogout() {
        await this.avatarUser.click();
        await this.btnLogout.click();
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   
}

module.exports = new Register();
