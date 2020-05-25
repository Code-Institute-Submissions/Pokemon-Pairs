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
});