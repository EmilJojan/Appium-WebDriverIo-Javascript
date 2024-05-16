const homePg = require('../PageObjects/HomePage');
const menuPg = require('../PageObjects/MenuPage');

const {Eyes,Target}=require('@applitools/eyes-webdriverio')

const eyes=new Eyes();



describe('Suite',()=>{
    it('Test',async()=>{

        
        eyes.setApiKey('u98Xe91dsOhDjyWfF44x1q8pTB1neS297UobEMlGgqK0E110');
        
        //Click on Skip SetUp Button
        // await $('//android.widget.Button[@resource-id="com.studiobluelime.ecommerceapp:id/btn_skip" and @text="SKIP"]').click();
        // await browser.pause(3000);

        try{

        await eyes.open(browser,'EcommerceApp','Test1');

        //Applitool visual validation point 1
        await eyes.checkWindow('HomePage')
        
        //Clicking on searchButton
        await homePg.SearchButton.click();
        await browser.pause(2000);
        //Clicking on BackButton
        await browser.back();
        await browser.pause(2000);
        await browser.back();
        await browser.pause(2000);
        //Clicking on MenuButton
        await homePg.menu.click();
        await browser.pause(3000);

        //Applitool visual validation point 2 
        await eyes.checkWindow('MenuPage')

        //Clicking on New Arrivals
        await menuPg.newArrival.click();
        await browser.pause(2000);
        await browser.back();
        //Clicking on Sale
        await menuPg.Sale.click();
        await browser.pause(2000);
        await browser.back();
        //Clicking on MyAccount
        await menuPg.MyAccount.click();
        await browser.pause(2000);
        }finally{
            await eyes.abortIfNotClosed();
        }

    })
}

)