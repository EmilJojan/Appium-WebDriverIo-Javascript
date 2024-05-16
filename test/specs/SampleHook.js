describe('Suite',()=>{
    before(async ()=>{
        console.log("Before Suite")
    })
    beforeEach(async ()=>{
        console.log("Before Each Method")
    })

    it('Test1',async()=>{
        console.log("Test1")
    })
    it('Test2',async()=>{
        console.log("Test2")
    })

    afterEach(async ()=>{
        console.log("After Each Method")
    })
    after(async ()=>{
        console.log("After Suite")
    })  
    
}

)