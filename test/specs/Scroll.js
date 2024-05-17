describe(
    'Suite',( )=>{
        it('Test',async()=>{
            //Scrolling Down To Bottom
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,2)')
            await browser.pause(3000)
            //Scroll Up To the Top
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,2)')
            await browser.pause(3000)
            //Scroll into a text
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Electronics")')
            await browser.pause(3000)
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,2)')
            //Scroll Horizontally
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward(5)')
        }
        )
    }
)