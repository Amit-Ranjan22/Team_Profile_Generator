const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    it("should assign value to the Employee object", () => {
        const employee = new Employee("Alpha", "1", "alpha@gmail.com");

        expect(employee.name).toBe("Alpha");
        expect(employee.id).toBe("1");
        expect(employee.email).toBe("alpha@gmail.com");
    });
});