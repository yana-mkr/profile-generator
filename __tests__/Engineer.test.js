const Engineer = require('../lib/Engineer');

test('checks if github is a string', () => {
    let github = ""
    const engineer = new Engineer("Steve", 2, "email", github);

    expect(engineer.github).toEqual(expect.any(String));
})