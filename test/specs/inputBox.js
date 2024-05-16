describe('Suite',()=>{
    it('Test',async()=>{
        //SearchButton Element using Resource ID
        const SearchButton= await $('//*[@resource-id="com.studiobluelime.ecommerceapp:id/fab_ma_search"]')
        await SearchButton.click()
        await browser.pause(3000)
        //SearchBar Element using Resource ID
        const SearchBar= await $('//*[@resource-id="com.studiobluelime.ecommerceapp:id/search_src_text"]')
        await SearchBar.setValue('Shirt')
    }

)}

)