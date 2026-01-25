const { remote } = require('webdriverio')
const { Utilities } = require('./utilities')
const Utility = new Utilities();

async function runTest() {
 
    const browser = await remote({
        automationProtocol: 'webdriver',
        logLevel: 'info',
        capabilities: {
            browserName: 'chrome'
        }
    })

await Utility.link('https://www.signupsoftware.com/book-demo/')
await Utility.win();
await browser.execute(() => new MutationObserver(() => document.querySelectorAll('#CybotCookiebotDialog,iframe[src*="cookiebot"]').forEach(e => e.remove())).observe(document, { subtree: 1, childList: 1 }))
await browser.pause(7000)
await Utility.enterText('//input[@name="firstname"]', 'sai');
await Utility.enterText('//input[@name="lastname"]', 'sai');
await Utility.enterText('//input[@name="companyname"]', 'sai');
await Utility.enterText('//input[@title="Email"]',"test@gmail.com");
await Utility.enterText('//textarea[@name="signup_gitmessage"]','Welcome');
await Utility.enterText('//input[@name="signup_referralsource"]','portal')
await Utility.guide('//p [text()="By submitting this form, you are agreeing to our "]')
await Utility.guide('//button[@type="submit"]')
}
runTest()
