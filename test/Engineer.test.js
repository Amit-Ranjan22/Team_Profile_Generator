const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    it("should assign value to the Engineer object", () => {
        const engineer = new Engineer("Beta", "2", "beta@gmail.com", "beta@github");

        expect(engineer.name).toBe("Beta");
        expect(engineer.id).toBe("2");
        expect(engineer.email).toBe("beta@gmail.com");
        expect(engineer.github).toBe("beta@github");
    });

    it("should return the role as Engineer", () => {
        const engineer = new Engineer("Beta", "2", "beta@gmail.com", "beta@github");

        expect(engineer.getRole()).toBe("Engineer");
    });
});