const Employee = require('../lib/Employee');

test('checks if name is a string', () => {
    let name = 'Steve'
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

test('checks if it returns employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual(expect.any(String));
})

test('checks if id is a number', () => {
    let id = 23;
    const employee = new Employee("Steve", id, "email");

    expect(employee.id).toEqual(expect.any(Number));
})

test('checks if email is a string', () => {
    let email = ''
    const employee = new Employee("Steve", 1, email);

    expect(employee.email).toBe(email);
})