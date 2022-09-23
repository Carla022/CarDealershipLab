//Create Car class with manufacturer, price and engine type properties:

const Car = function(manufacturer, price, engineType){
    //PROPERTIES
    this._manufacturer = manufacturer;
    this._price = price;
    this._engineType = engineType;

}

module.exports = {Car};