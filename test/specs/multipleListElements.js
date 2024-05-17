describe('Suite',()=>{
    it('Test',async()=>{

        actualList=[]
        const listValues= await $$('android.widget.TextView')

        for(const ele of listValues){
            actualList.push(await ele.getText())
        }

        console.log(actualList)
    }
    )
}

)