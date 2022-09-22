//Create Car class with manufacturer, price and engine type properties:
const Car = function(manufacturer, price, engineType){
    //PROPERTIES
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    // this.getManufacturer = ()=> _manufacturer;
    // this.setManufacturer = (manufacturer)=> _manufacturer = manufacturer;
    // this.getPrice = ()=> _price;
    // this.setPrice = (price)=> _price = price;
    // this.getEngineType = ()=> _engineType;
    // this.setEngineType = (engineType)=> _engineType = engineType;
}

// Create a Dealership class with name, maximum number of cars it can have and the cars currently in stock:

//Constructor function:
const Dealership = function(title, maxNumberOfCars, currentCarStock){
    //PROPERTIES
    let _title = title;
    let _maxNumberOfCars = maxNumberOfCars;
    let _currentCarStock = currentCarStock;

    

    //METHODS (behaviours)
    // Count the number of cars in stock:
  
    // Add a car to stock:
    this.addCar = (car)=> _currentCarStock.push(currentCarStock);

    // Return an array containing each car's manufacturer:
    this.getCurrentCarStockMake= () => _m;

    // Find all the cars from a given manufacturer:

    // Find the total value of all the cars in stock:
    
const Mojo = new Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder');
const Bolinhas = new Car('Audi', 38905, '2.0 l 4-cylinder')



module.exports = { 
    Car
}};