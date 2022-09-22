//Import the Car class
// test to make sure you can access each property in a Car object:

const {
    Car
 } = require('../lab_car_dealership');


describe('Car class test properties1 suite', () => { 
  
    test('can access the property manufacturer', () => {
     const expected = this.manufacturer;
     const actual = Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder')
      expect(actual).toBe(expected);
    })
});

describe('Car class test properties2 suite', () => { 
  
    test('can access the property price', () => {
     const expected = this.price;
     const actual = Car('Audi', 38905, '2.0 l 4-cylinder')
      expect(actual).toBe(expected);
    })
});

describe('Car class test properties2 suite', () => { 
  
    test('can access the property engine Type', () => {
     const expected = this.engineType;
     const actual = Car('Renault', 11500, '1.0 l 3-cylinder')
      expect(actual).toBe(expected);
    })
});
