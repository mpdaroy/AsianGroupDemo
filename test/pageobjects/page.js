/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    get linkLanguages () {
        return $('#kc-current-locale-link');
    }   

    get labelPageTitle () {
        return $('#kc-page-title');
    } 
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.maximizeWindow();
        browser.url(`https://console.uat.asians.group/${path}`);        
    }

    async selectLanguage (languageIndex) {
        await this.linkLanguages.moveTo();
        let elem = await $('li:nth-of-type(' + languageIndex +  ') .pf-c-dropdown__menu-item');
        await elem.click();
    }
}
