const {remote} = require ('webdriverio')
async function runTest(){
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});

await browser.url("https://www.saucedemo.com/")
//await browser.pause(0);
await browser.$('//input[@name="user-name"]').setValue("standard_user")
await browser.$('//input[@data-test="password"]').setValue('secret_sauce')
await browser.$('//input[@name="login-button"]').click()

}
runTest();
 