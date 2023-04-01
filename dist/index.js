"use strict";
// Abstract Vehicle class with common properties and methods for all vehicles
class Vehicle {
    // Constructor with shorthand property initialization
    constructor(_make, _model, _year, _rented = false) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    // Getter methods to access private properties
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    // Method to check if vehicle is rented
    isRented() {
        return this._rented;
    }
    // Setter method for the rented instance
    setRentalStatus(rented) {
        this._rented = rented;
    }
    // Rent method to rent a vehicle if it is not already rented
    rent() {
        if (!this._rented) {
            this.setRentalStatus(true);
            return `Renting ${this.make} ${this.model} ${this.year}...`;
        }
        return `This ${this.make} ${this.model} ${this.year} is already rented.`;
    }
    // Return method to return a vehicle if it was rented from this instance
    return() {
        if (!this._rented) {
            return `This ${this.make} ${this.model} ${this.year} has not been rented.`;
        }
        this.setRentalStatus(false);
        return `Returning ${this.make} ${this.model} ${this.year}...`;
    }
}
// Car class that extends the Vehicle class
class Car extends Vehicle {
    constructor(_make, _model, _year, _fuelType, _seatingCapacity, _engineSize) {
        super(_make, _model, _year);
        this._fuelType = _fuelType;
        this._seatingCapacity = _seatingCapacity;
        this._engineSize = _engineSize;
    }
    // Getter methods to access private properties
    get fuelType() {
        return this._fuelType;
    }
    get seatingCapacity() {
        return this._seatingCapacity;
    }
    get engineSize() {
        return this._engineSize;
    }
    // Implementation of the abstract method to calculate rental rate for Car class
    rentalRate() {
        return 100; // Sample rate
    }
}
// Truck class that extends the Vehicle class
class Truck extends Vehicle {
    constructor(_make, _model, _year, _wheelbase, _numDoors, _fuelEfficiency) {
        super(_make, _model, _year);
        this._wheelbase = _wheelbase;
        this._numDoors = _numDoors;
        this._fuelEfficiency = _fuelEfficiency;
    }
    // Getter methods to access private properties
    get wheelbase() {
        return this._wheelbase;
    }
    get numDoors() {
        return this._numDoors;
    }
    get fuelEfficiency() {
        return this._fuelEfficiency;
    }
    // Implementation of the abstract method to calculate rental rate for Truck class
    rentalRate() {
        return 200; // Sample rate
    }
}
// Motorcycle class that extends the Vehicle class
class Motorcycle extends Vehicle {
    constructor(_make, _model, _year, _topSpeed, _seatHeight, _brakes) {
        super(_make, _model, _year);
        this._topSpeed = _topSpeed;
        this._seatHeight = _seatHeight;
        this._brakes = _brakes;
    }
    // Getter methods to access private properties
    get topSpeed() {
        return this._topSpeed;
    }
    get seatHeight() {
        return this._seatHeight;
    }
    get brakes() {
        return this._brakes;
    }
    // Implementation of the abstract method to calculate rental rate for MotorCycle class
    rentalRate() {
        return 300; // Sample rate
    }
}
// Sample Usuage
// Instances of objects
const car = new Car('Honda', 'Civic', 2023, 'Gasoline', 5, 2.0);
const truck = new Truck('Chevrolet', 'Silverado', 2020, 141, 2, 18);
const motorCycle = new Motorcycle('Yamaha', 'YZF-R6', 2021, 160, 33, 'Dual Disc');
// Rent and return the vehicles
console.log(car.rent()); // Renting Honda Civic 2023...
console.log(car.return()); // Returning Honda Civic 2023...
console.log(truck.rent()); // Renting Chevrolet Silverado 2020...
console.log(truck.return()); //Returning Chevrolet Silverado 2020...
console.log(motorCycle.rent()); //Renting Yamaha YZF-R6 2021...
console.log(motorCycle.return()); // Returning Yamaha YZF-R6 2021...
//# sourceMappingURL=index.js.map