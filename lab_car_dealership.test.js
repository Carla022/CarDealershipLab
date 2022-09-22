//Import the Car class
// test to make sure you can access each property in a Car object:

//Write tests for Dealership's methods also:

const {
    mojo,
    bolinhas,
    jas,
    motors4U
 } = require('./lab_car_dealership');


describe('Car class test properties1 suite', () => { 
  
    test('can access the property manufacturer', () => {
     expected = 'Vauxhall';
    actual = mojo.manufacturer;
    expect(actual).toBe(expected);
    })

    test('can access the property price', () => {
        expected = 38905;
        actual = bolinhas.price;
       expect(actual).toBe(expected);
    })

    test('can access the property engine Type', () => {
        expected = '1.0 l 3-cylinder';
        actual = jas.engineType;
       expect(actual).toBe(expected);
    })
});


describe('Dealership class test methods', () => {
    test('Can get dealership name/title', () => {
        const expected = "Motors4U dealership";
        const actual = motors4U.title;
        expect(actual).toBe(expected);
    })

    test('Count the number of cars in stock', () => {
        const expected = 2;
        const actual = motors4U.countStock;
        expect(actual).toBe(expected);
    })

    test('Can add a car to Motors4U stock', () => {
        const expected = 3;
        const actual = motors4U.addCar(mojo);
        expect(actual).toBe(expected);
    })
});