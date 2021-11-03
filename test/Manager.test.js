const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    it("should return the assigned value to the constructor object", () => {
        const manager = new Manager("Delta", "4", "delta@gmail.com", "9879879879");

        expect(manager.name).toBe("Delta");
        expect(manager.id).toBe("4");
        expect(manager.email).toBe("delta@gmail.com");
        expect(manager.phoneNumber).toBe("9879879879");
    });

    it("should return the role of manager by using getRole", () => {
        const manager = new Manager("Delta", "4", "delta@gmail.com", "9879879879");

        expect(manager.getRole()).toBe("Manager");
    });
});