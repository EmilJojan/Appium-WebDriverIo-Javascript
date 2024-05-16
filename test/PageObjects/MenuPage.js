// @ts-nocheck

class MenuPage{

   get MyAccount(){
       return $('//android.widget.CheckedTextView[@resource-id="com.studiobluelime.ecommerceapp:id/design_menu_item_text" and @text="My Account"]')
    }

    get Sale(){
        return $('//android.widget.CheckedTextView[@resource-id="com.studiobluelime.ecommerceapp:id/design_menu_item_text" and @text="Sale"]')
    }

    get newArrival(){
        return $('//android.widget.CheckedTextView[@resource-id="com.studiobluelime.ecommerceapp:id/design_menu_item_text" and @text="New Arrivals"]')
    }
} 
module.exports=new MenuPage();