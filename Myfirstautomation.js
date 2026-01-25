const {remote} = require ('webdriverio')
async function runTest(){
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});

await browser.url("https://desktop.github.com/download/")
await browser.pause(20000000);
 
}
runTest();
 