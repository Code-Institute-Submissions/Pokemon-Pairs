describe("Deciding which difficulty to make active", function() {
   
    it("should exist", function() {
            expect(selectingActiveDifficulty).toBeDefined();
        });

    it("should select #easy if the code is 1", function() {
            var result = selectingActiveDifficulty(1)
            expect(result).toBe("#easy");
        });
    
     it("should select #medium if the code is 2", function() {
            var result = selectingActiveDifficulty(2)
            expect(result).toBe("#medium");
        });

    });