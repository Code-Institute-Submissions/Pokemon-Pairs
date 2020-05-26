
 describe("Start game should appear", function() {
 it("should exist", function(){
     expect($('#easyButton')).toBeDefined;
 });

// it("should make the start button visible", function(){
//  spyOnEvent($('#easyButton'), 'click')
//  expect($('#startGame')).toBeVisible()   
// });
// 

 });


describe("Speaker Icon should disappear", function() {
 it("should exist", function() {
            expect($(".fa-volume-up")).toBeDefined();
        });

 
    it("item should be hidden", function () {
        $(".fa-volume-up").click()
        expect($(".fa-volume-up").css('display', 'none').toBeTrue);
        expect($(gameTheme).prop('muted', true)).toBeFalse;
    
    });
        
    });