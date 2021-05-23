const Intern = require('../lib/Intern');

test('checks if school is a string', () => {
    let school = ""
    const intern = new Intern("Steve", 2, "email", school);

    expect(intern.school).toEqual(expect.any(String));
})