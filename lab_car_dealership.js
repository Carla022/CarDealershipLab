const { prototype } = require("events");
const { title } = require("process");

//Create Car class with manufacturer, price and engine type properties:
class Car {
    constructor(manufacturer, price, engineType) {
        this.manufacturer = manufacturer;
        this.price = price;
        this.engineType = engineType;
    }
}   

// const Car = function(manufacturer, price, engineType){
//     //PROPERTIES
//     let_manufacturer = manufacturer;
//     let_price = price;
//     let_engineType = engineType;

// }



// Create a Dealership class with name, maximum number of cars it can have and the cars currently in stock:

//Constructor function:

class Dealership {
    constructor(title, maxNumberOfCars, currentCarStock) {
        this.title = title;
        this.maxNumberOfCars = maxNumberOfCars;
        this.currentCarStock = currentCarStock;        
    }

// const Dealership = function(title, maxNumberOfCars, currentCarStock){
//     //PROPERTIES
//     this.title = title;
//     this.maxNumberOfCars = maxNumberOfCars;
//     this.currentCarStock = [];
// }

//METHODS (behaviours)
// Count the number of cars in stock:

countStock = function() {
    return this.currentCarStock.length;
}


// Dealership.prototype.countCarStock = function() {
//     //currentCarStock is an array
//     return this.currentCarStock.length;

// }

//add a car to stock:

addCar = (car) => { 
    this.currentCarStock.push(car);
}

// Dealership.prototype.addCarToStock = function(car)  {
//     this.currentCarStock.push(car);
// }

// Return an array containing each car's manufacturer:
getCarArray = function () {
    let arrOfCarsManufacturer = []; 
    let arr = this.currentCarStock;
  
   for(vehicle in arr){ arrOfCarsManufacturer.push(arr[vehicle].manufacturer);
}
   
return arrOfCarsManufacturer;

};

}


// Dealership.prototype.CarManufacturer = function()  {
//     let arrOfCarsManufacturer = []; 
//     let arr = this.currentCarStock;
  
//    for(vehicle in arr){ arrOfCarsManufacturer.push(arr[vehicle].manufacturer);
// }
   
// return arrOfCarsManufacturer;

// };

// Find all the cars from a given manufacturer:
 
getCarsByManufacturer = function(title) {
    return this.currentCarStock.filter(currentCarStock => currentCarStock.manufacturer === title );

}

// Dealership.prototype.carsByManufacturer = function (title)  {
//     return this.currentCarStock.filter(currentCarStock => currentCarStock.manufacturer === title );
// };


//Find the total value of all the cars in stock:

getTotalValue = function() {
    // set initial value
    const initialValue = 0; 

  // all cars in currentCarStock will get its price using the map
  // Use map to create a new array from the currentCarStock array
  //this new array will store all the car prices

  const priceArray = this.currentCartock.map(currentCarStock => currentCarStock.price)

  //Reduce aka accumelator: simplifies priceArray values:
 return priceArray.reduce((reducer, currentValue) => reducer + currentValue, initialValue);
};

// Dealership.prototype.totalStockCarsValue = function ()  {
//     // set initial value
//     const initialValue = 0; 

//   // all cars in currentCarStock will get its price using the map
//   // Use map to create a new array from the currentCarStock array
//   //this new array will store all the car prices

//   const priceArray = this.currentCartock.map(currentCarStock => currentCarStock.price)

//   //Reduce aka accumelator: simplifies priceArray values:
//  return priceArray.reduce((reducer, currentValue) => reducer + currentValue, initialValue);
// };

//new car variable

const mojo = new Car('Vauxhall Corsa', 10000, ' 1.2 L 3-cylinder');
const bolinhas = new Car('Audi', 38905, '2.0 l 4-cylinder');
const jas = new Car('Renault', 11500, '1.0 l 3-cylinder');

let carArray = [mojo, bolinhas, jas];

//new dealership variable

const motors4U = new Dealership("Motors4U dealership", 12, carArray);

module.exports = { 
    mojo,
    bolinhas,
    jas,
    motors4U
};