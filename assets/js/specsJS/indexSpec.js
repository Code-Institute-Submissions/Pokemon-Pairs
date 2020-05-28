describe("Show which theme song has been chosen", function() {
    
    beforeEach(function() {
        card = new activeTheme(themeSelector);
    });

    it("should exist", function() {
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

    it("should return as endTheme when themeSelector is 3", function() {
            var result = activeTheme(3)
            expect(result).toBe(endTheme);
        });
    
});

describe("Show which theme modal is currently active", function() {
    
    beforeEach(function() {
        card = new modalSelectionFunction(whichModal);
    });

    it("should exist", function() {
            expect(modalSelectionFunction).toBeDefined();
        });

    it("should return as volumeModal when whichModal is 1", function() {
            var result = modalSelectionFunction(1)
            expect(result).toBe("#volumeModal");
        });

    it("should return as welcomeModal when whichModal is 2", function() {
            var result = modalSelectionFunction(2)
            expect(result).toBe("#welcomeModal");
        });

    it("should return as difficultyModal when whichModal is 3", function() {
            var result = modalSelectionFunction(3)
            expect(result).toBe("#difficultyModal");
        });

    it("should return as finishedModal when whichModal is 4", function() {
            var result = modalSelectionFunction(4)
            expect(result).toBe("#finishedModal");
        });

   
});

