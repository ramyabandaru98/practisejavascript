 const { remote } = require('webdriverio')
 //const browser=this.name()

class Utilities{
    Utilities(){
        this.browser = this.name()
    }
    async name() {
    const browser = remote({
            automationProtocol: 'webdriver',
            logLevel: 'info',
            capabilities: {
                browserName: 'chrome'

            }
        })
    return browser()
}
async  enterText(selector,value){
      await browser.$(`${selector}`).setValue(`${value}`)

  }
async link(openurl){
    await browser.url(`${openurl}`)
 }
 async guide(selector1) {
    await browser.$(`${selector1}`).click()  
 }
async win(){
    await browser.maximizeWindow()
}
}
module.exports={Utilities}