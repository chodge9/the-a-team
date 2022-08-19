const Employee = require("../lib/Employee");
test("Sets name", ()=>{
    const employee = new Employee("Chantal", "2", "me@yahoo.com")
    expect(employee.name).toBe("Chantal")
})

test("Gets name", ()=>{
    const employee = new Employee("Chantal", "2", "me@yahoo.com")
    expect(employee.getName()).toBe("Chantal")
})