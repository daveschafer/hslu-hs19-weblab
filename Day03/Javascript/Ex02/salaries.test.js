const sum = require('./salaries');


test('should calculate salaries', () =>  {

    let salaries = {
        patrick: 100000,
        andreas: 110000,
        gwendolin: 91000,
        nayoona: 45000
     };

     expect(sum(salaries)).toBe(346000);
});