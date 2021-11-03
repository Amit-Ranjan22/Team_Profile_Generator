const Employee = require("./Employee");

class Manager extends Employee {
    constructor(myName, myId, myEmail, myNumber) {
        super(myName, myId, myEmail);
        this.phoneNumber = myNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;