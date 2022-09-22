//Import the Car class
// test to make sure you can access each property in a Car object:

//Write tests for Dealership's methods also:

const {
    Car,
    Dealership
 } = require('./lab_car_dealership');


 //:::::::::::::::::TEST : Testing car properties:::::::::::::::::::::::
describe('Car class test properties suite', () => { 

    test('can access the property manufacturer', () => {
     const expected = this.manufacturer;
     const actual = Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder')
      expect(actual).toBe(expected);
    })

    test('can access the property price', () => {
        const expected = this.price;
        const actual = Car('Audi', 38905, '2.0 l 4-cylinder')
         expect(actual).toBe(expected);
       })

       test('can access the property engine Type', () => {
        const expected = this.engineType;
        const actual = Car('Renault', 11500, '1.0 l 3-cylinder')
         expect(actual).toBe(expected);
       })

});

//:::::::::::::::::TEST: Testing can count number of cars in stock method:::::::::::::::::::::::


describe('Dealership class test methods', () => {
    test('Count the number of cars in stock', () => {

        let title = "Motors4U Dealership";
        let maximumCars = 12;
        let currentCarStock = [new Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder'), new Car('Audi', 38905, '2.0 l 4-cylinder'), new Car ('Renault', 11500, '1.0 l 3-cylinder')]

        //make new dealership variable:

        let dealer = new Dealership(title, maxNumberOfCars, currentCarStock)

        const expected = 3;
        const actual = dealer.countCarStock;
        expect(actual).toBe(expected);

     })

});

//:::::::::::::::::TEST: Testing can add a car to stock method:::::::::::::::::::::::

describe('Dealership class test methods', () => {
    test('Can add car to  stock', () => {

        let title = "Motors4U Dealership";
        let maximumCars = 12;
        let currentCarStock = [new Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder'), new Car('Audi', 38905, '2.0 l 4-cylinder'), new Car ('Renault', 11500, '1.0 l 3-cylinder')]

        let carToAdd = [new Car("BMW", 62200, "3.0 l 6-cylinder"), new Car ("Peugeot", 2000, "954 cc XV I4"), new Car("Ford", 21000, "1.5 l 3-cylinder")]

        let dealer = new Dealership(title, maxNumberOfCars, currentCarStock) 

        ///want to add Ford car index 2
        motors4U.addCarToStock(carAvailableToAdd[2])    
        
        const actual =  dealer.countCarsInStock()   
        const expected = 6;                               
        expect(actual).toBe(expected);
    })



});

 
//:::::::::::::::::TEST: Testing can return an array containing each car's manufacturer:::::::::::::::::::::::

describe('Dealership class test methods', () => {
    test('Can return car manu array', () => {

        let title = "Wheels4All";
        let maximumCars = 8;
        let currentCarStock = [new Car('Ferrari', 225897, 'F136 V8'), new Car('Mercedes benz', 41445, '2.0 l 4-cylinder diesel'), new Car ('Volkswagen', 25290, '1395 cc')]

        let carToAdd = [new Car("BMW", 62200, "3.0 l 6-cylinder"), new Car ("Peugeot", 2000, "954 cc XV I4"), new Car("Ford", 21000, "1.5 l 3-cylinder")]

        let dealer = new Dealership(title, maxNumberOfCars, currentCarStock) 

        ///want to add Ford car index 2
        motors4U.addCarToStock(carAvailableToAdd[2])    
        
        const actual =  dealer.CarManufacturer()     
        const expected = ['BMW', 'Peugeot', 'Ford' ];                                
        expect(actual).toStrictEqual(expected);
    })



});


//:::::::::::::::::TEST: Testing can find all the cars from a given manufacturer:::::::::::::::::::::::

//:::::::::::::::::TEST: Testing can find the total value of all the cars in stock:::::::::::::::::::::::