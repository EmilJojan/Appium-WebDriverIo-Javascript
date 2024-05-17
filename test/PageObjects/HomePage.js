
class HomePage{
        get menu(){
            return $('//android.widget.ImageButton[@content-desc="App"]')
        }

        get cart(){
            return $('//android.widget.TextView[@content-desc="Cart"]')
        }

        get SearchButton(){
            return $('//android.widget.ImageButton[@resource-id="com.studiobluelime.ecommerceapp:id/fab_ma_search"]')
        }
}
module.exports= new HomePage();