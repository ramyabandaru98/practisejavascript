const {remote} = require ('webdriverio')
async function runTest(){
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});

await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await browser.pause(2000);
await browser. $('//input[@name="username"]').setValue("Admin")
await browser. $('//input[@name="password"]').setValue("admin123")
await browser. $('//button[@type="submit"]').click()

}
runTest();
 