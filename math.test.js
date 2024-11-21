const {add , subtruct, divide, multiply } = require ("./math");

describ("math.js tests",() =>){
    it("shold test add ", () =>{
        expect(add(2,2)).toBe(4);
    });

    it("shold test subtruct" ,() =>{
        expect(subtruct(2,2).toBe(0));
    });

    it("shold test divide" ,() =>{
        expect(subtruct(2,2).toBe(1));
    });

    it("shold test multiply" ,() =>{
        expect(subtruct(2,2).toBe(4));
    });
}