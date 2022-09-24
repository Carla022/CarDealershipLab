
// Create a Dealership class with name, maximum number of cars it can have and the cars currently in stock:

//Constructor function:

const Dealership = function(title, maxNumberOfCars, currentCarStock){

    //PROPERTIES
    this.title = title;
    this.tmaxNumberOfCars = maxNumberOfCars;
    this.currentCarStock = currentCarStock;
}

//METHODS (behaviours)

//what is a prototype? all of the objects inerited will have a prototpe property -prototype allows you to add new properties and methods to arrays.
//prototype is a property available with all JavaScript objects.


// Count the number of cars in stock:
//currentCarStock is an array
Dealership.prototype.countCarStock = function() { return this.currentCarStock.length };

//add a car to stock:
Dealership.prototype.addCarToStock = function(car) { this.currentCarStock.push(car)} //< this.maxNumberOfCars){this.cars.push(car); }
    

// Return an array containing each car's manufacturer:

Dealership.prototype.carsManufacturer = function()  { 
    return this.currentCarStock.map((currentCarStock) => currentCarStock.manufacturer)
};

// Find all the cars from a given manufacturer:

Dealership.prototype.carsByManufacturer = function (title)  {
    return this.currentCarStock.filter(currentCarStock => currentCarStock.manufacturer === title );
};


//Find the total value of all the cars in stock:

Dealership.prototype.totalStockCarsValue = function ()  {
    // set initial value
    const initialValue = 0; 

  // all cars in currentCarStock will get its price using the map
  // Use map to create a new array from the currentCarStock array
  //this new array will store all the car prices

  const priceArray = this.currentCarStock.map(currentCarStock => currentCarStock.price)

  //Reduce aka accumelator: simplifies priceArray values:
 return priceArray.reduce((reducer, currentValue) => reducer + currentValue, initialValue);
};

//new car variable

// const mojo = new Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder');
// const bolinhas = new Car('Audi', 38905, '2.0 l 4-cylinder');
// const jas = new Car('Renault', 11500, '1.0 l 3-cylinder');

// let carArray = [mojo, bolinhas, jas];


module.exports = { 
    Dealership
};