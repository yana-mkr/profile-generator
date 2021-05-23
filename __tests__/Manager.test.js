const Manager = require('../lib/Manager');

test('checks if office is a number', () => {
    let office = 3
    const manager = new Manager("Steve", 2, "email", office);

    expect(manager.office).toEqual(expect.any(Number));
})