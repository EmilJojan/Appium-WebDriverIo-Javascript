describe('Suite',()=>{
    it('Test',async()=>{
        //Drag and drop command
        const source=await $('#id')
        const target=await $('#id')

        await source.dragAndDrop(target);


        //Mouse hover command
        const element=await $('#id')
        await element.moveTo();

        //Wait For an Element To be Displayed
        await browser.waitUntil(
            async()=>await element.isDisplayed(),
            {timeout:5000,timeoutMsg:'Element not displayed'}
        )

        // Define the default wait time for locating elements.
        await browser.setTimeout({ implicit: 5000 });

        // Define the maximum allowed time for a script to execute in the browser.
        await browser.setTimeout({ script: 30000 });

        // Define the maximum allowed time for a page to load.
        await browser.setTimeout({ pageLoad: 10000 });

        // Checks if the given element is displayed.
        const elem = await $('#someElem'); 
        await expect(elem).toBeDisplayed();

        // Checks if the given element is enabled.
        const elem1 = await $('#someElem');
        await expect(elem).toBeEnabled();

        // Checks if an element has a specific text. Can also be called with an array as a parameter in case the element can have different texts.
        const elem2 = await $('.container'); 
        await expect(elem).toHaveText('Begin your SDET Journey')
        //Waiting for element to display
        elem2.waitForDisplayed({ timeout: 3000 });

    })  
}
    
)