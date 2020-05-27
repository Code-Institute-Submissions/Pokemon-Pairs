describe("Show which theme song has been chosen", function() {
    
    beforeEach(function() {
        card = new activeTheme(themeSelector);
    });

    it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(activeTheme).toBeDefined();
        });

    it("should return as mainTheme when themeSelector is 1", function() {
            var result = activeTheme(1)
            expect(result).toBe(mainTheme);
        });

    it("should return as mainTheme when themeSelector is 1", function() {
            var result = activeTheme(1)
            expect(result).toBe(mainTheme);
        });

    it("should return as gameTheme when themeSelector is 2", function() {
            var result = activeTheme(2)
            expect(result).toBe(gameTheme);
        });

    it("should return as gameTheme when themeSelector is 2", function() {
            var result = activeTheme(3)
            expect(result).toBe(endTheme);
        });
    
});

