//Import the Car class
// test to make sure you can access each property in a Car object:


const {Car} = require('./car');

//:::::::::::::::::TEST : Testing car properties:::::::::::::::::::::::

describe('Car class test properties suite', () => { 

    test('can access the property manufacturer', () => {

     const actual = Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder')
     const expected = this.manufacturer;

      expect(actual).toBe(expected);
    })

    test('can access the property price', () => {

     const actual = Car('Audi', 38905, '2.0 l 4-cylinder')
     const expected = this.price;

      expect(actual).toBe(expected);
    })

    test('can access the property engine Type', () => {

     const actual = Car('Renault', 11500, '1.0 l 3-cylinder')
     const expected = this.engineType;

      expect(actual).toBe(expected);
    })

});