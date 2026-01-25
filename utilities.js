 const { remote } = require('webdriverio')
 //const browser=this.name()

class Utilities{
    Utilities(){
        this.browser = null
    }
    async name() {
    this.browser= await remote({
            automationProtocol: 'webdriver',
            logLevel: 'info',
            capabilities: {
                browserName: 'chrome'

            }
        })
    //return browser()
}
async  enterText(selector,value){
      await this.browser.$(`${selector}`).setValue(`${value}`)

  }
async link(openurl){

    await this.browser.url(`${openurl}`)
    await this.browser.execute(() => new MutationObserver(() => document.querySelectorAll('#CybotCookiebotDialog,iframe[src*="cookiebot"]').forEach(e => e.remove())).observe(document, { subtree: 1, childList: 1 }))
  

 }
async tim(value){
await this.browser.pause(value)
}
 async guide(selector1) {
    await this.browser.$(`${selector1}`).click()  
 }
async win(){
    await this.browser.maximizeWindow()
}
}
module.exports={Utilities}