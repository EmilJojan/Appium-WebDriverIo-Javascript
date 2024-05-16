describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log('Test started')        

        //Initialising the MenuButton Element using Accessibility ID
        const menuButton = await $('~App')
        //Clicking on the MenuButton
        await menuButton.click()
        //waiting for 2 seconds
        await browser.pause(2000)
        //Clicking on back button
        await browser.back()
        //waiting for 2 seconds
        await browser.pause(2000)

        //Initialising the Exit Pop-Up Element using Xpath
        const exitPopup = await $('//android.widget.TextView[@resource-id="android:id/message"]')
        //Saving the message to a string variable
        const message=await exitPopup.getText()
        //Printing the message
        console.log(message)
        //waiting for 2 seconds
        await browser.pause(2000)
        //Asserting the message
        expect(message).toHaveText("Want To Exit ???")

        //Clicking on cancel Buttton using xpath
        const cancelButton = await $('//android.widget.Button[@resource-id="android:id/button2"]')
        await cancelButton.click()
        
    })
})

