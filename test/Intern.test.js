const Intern = require("../lib/Intern");
const intern = require("../lib/Intern");

describe("Intern Class", () => {
    it("should assign value to the Intern object", () => {
        const intern = new Intern("Charlie", "3", "charlie@gmail.com", "SHNU");

        expect(intern.name).toBe("Charlie");
        expect(intern.id).toBe("3");
        expect(intern.email).toBe("charlie@gmail.com");
        expect(intern.school).toBe("SHNU");
    });

    it("should return the role of the intern by using getRole", () => {
        const intern = new Intern("Charlie", "3", "charlie@gmail.com", "SHNU");

        expect(intern.getRole()).toBe("Intern");
    });
});