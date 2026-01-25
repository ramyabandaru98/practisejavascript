const { remote } = require('webdriverio')
 
async function runTest() {
 
    const browser = await remote({
        automationProtocol: 'webdriver',
        logLevel: 'info',
        capabilities: {
            browserName: 'chrome'
        }
    })
 
await browser.url('https://www.signupsoftware.com/book-demo/')
await browser.execute(() => new MutationObserver(() => document.querySelectorAll('#CybotCookiebotDialog,iframe[src*="cookiebot"]').forEach(e => e.remove())).observe(document, { subtree: 1, childList: 1 }))
await browser.pause(5000)
await browser.$('//input[@name="firstname"]').setValue('sai')
await browser.$('//input[@name="lastname"]').setValue('ram')
await browser.$('//input[@name="companyname"]').setValue('Qentelli')
await browser.$("//div[text()='Afghanistan']")
await browser.$("//p[text()='ERP Solution']")
await browser.$('//input[@title="Email"]').setValue("test@gmail.com")
await browser.$('//textarea[@name="signup_gitmessage"]').setValue("Welcome")
await browser.$('//input[@name="signup_referralsource"]').setValue("portal")
await browser.$('//p [text()="By submitting this form, you are agreeing to our "]').click()
await browser.$('//button[@type="submit"]').click()
}
runTest();