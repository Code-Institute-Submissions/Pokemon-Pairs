describe("Give an ID based on the card selected", function() {
    
    beforeEach(function() {
        card = new clickedCard(whichCardClicked);
    });

    it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(clickedCard).toBeDefined();
        });

    it("should return as #card1 when called as clickedCard(1)", function() {
            var result = clickedCard(1)
            expect(result).toBe("#card1");
        });
    it("should return as #card2 when called as clickedCard(2)", function() {
            var result = clickedCard(2)
            expect(result).toBe("#card2");
        });

         it("should return as #card3 when called as clickedCard(3)", function() {
            var result = clickedCard(3)
            expect(result).toBe("#card3");
        });
         it("should return as #card4 when called as clickedCard(4)", function() {
            var result = clickedCard(4)
            expect(result).toBe("#card4");
        });
         it("should return as #card5 when called as clickedCard(5)", function() {
            var result = clickedCard(5)
            expect(result).toBe("#card5");
        });
         it("should return as #card6 when called as clickedCard(6)", function() {
            var result = clickedCard(6)
            expect(result).toBe("#card6");
        });
         it("should return as #card7 when called as clickedCard(7)", function() {
            var result = clickedCard(7)
            expect(result).toBe("#card7");
        });
         it("should return as #card8 when called as clickedCard(8)", function() {
            var result = clickedCard(8)
            expect(result).toBe("#card8");
        });
         it("should return as #card9 when called as clickedCard(9)", function() {
            var result = clickedCard(9)
            expect(result).toBe("#card9");
             });
             it("should return as #card10 when called as clickedCard(10)", function() {
            var result = clickedCard(10)
            expect(result).toBe("#card10");
        }); it("should return as #card11 when called as clickedCard(11)", function() {
            var result = clickedCard(11)
            expect(result).toBe("#card11");
        }); 
        it("should return as #card12 when called as clickedCard(12)", function() {
            var result = clickedCard(12)
            expect(result).toBe("#card12");
        });
});

