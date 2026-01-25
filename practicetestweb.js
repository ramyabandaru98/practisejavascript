
const {remote} = require ('webdriverio')
async function runTest(){
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});
await browser.url('https://practicetestautomation.com/practice-test-login/')
await browser.$('//input[@name="username"]').setValue("student")
await browser.$('//input[@name="password"]').setValue("Password123")
await browser.$('//button[@id="submit"]').click()


}
runTest();