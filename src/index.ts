// Abstract Vehicle class with common properties and methods for all vehicles
abstract class Vehicle {
	// Constructor with shorthand property initialization

	constructor(private _make: string, private _model: string, private _year: number, private _rented: boolean = false) {}

	// Getter methods to access private properties

	get make(): string {
		return this._make;
	}
	get model(): string {
		return this._model;
	}
	get year(): number {
		return this._year;
	}

	// Method to check if vehicle is rented
	isRented(): boolean {
		return this._rented;
	}
	// Setter method for the rented instance
	setRentalStatus(rented: boolean) {
		this._rented = rented;
	}

	// Abstract method for calculating rental rate
	abstract rentalRate(): number;

	// Rent method to rent a vehicle if it is not already rented

	rent(): string {
		if (!this._rented) {
			this.setRentalStatus(true);
			return `Renting ${this.make} ${this.model} ${this.year}...`;
		}

		return `This ${this.make} ${this.model} ${this.year} is already rented.`;
	}

	// Return method to return a vehicle if it was rented from this instance

	return(): string {
		if (!this._rented) {
			return `This ${this.make} ${this.model} ${this.year} has not been rented.`;
		}

		this.setRentalStatus(false);
		return `Returning ${this.make} ${this.model} ${this.year}...`;
	}
}

// Car class that extends the Vehicle class

class Car extends Vehicle {
	constructor(
		_make: string,
		_model: string,
		_year: number,
		private _fuelType: string,
		private _seatingCapacity: number,
		private _engineSize: number,
	) {
		super(_make, _model, _year);
	}

	// Getter methods to access private properties

	get fuelType(): string {
		return this._fuelType;
	}

	get seatingCapacity(): number {
		return this._seatingCapacity;
	}

	get engineSize(): number {
		return this._engineSize;
	}

	// Implementation of the abstract method to calculate rental rate for Car class
	rentalRate(): number {
		return 100; // Sample rate
	}
}


// Truck class that extends the Vehicle class
class Truck extends Vehicle {
	constructor(
		_make: string,
		_model: string,
		_year: number,
		private _wheelbase: number,
		private _numDoors: number,
		private _fuelEfficiency: number,
	) {
		super(_make, _model, _year);
	}

	// Getter methods to access private properties

	get wheelbase(): number {
		return this._wheelbase;
	}

	get numDoors(): number {
		return this._numDoors;
	}

	get fuelEfficiency(): number {
		return this._fuelEfficiency;
	}


	// Implementation of the abstract method to calculate rental rate for Truck class
	rentalRate(): number {
		return 200; // Sample rate
	}
}

// Motorcycle class that extends the Vehicle class

class Motorcycle extends Vehicle {
	constructor(
		_make: string,
		_model: string,
		_year: number,
		private _topSpeed: number,
		private _seatHeight: number,
		private _brakes: string,
	) {
		super(_make, _model, _year);
	}

	// Getter methods to access private properties
	get topSpeed(): number {
		return this._topSpeed;
	}

	get seatHeight(): number {
		return this._seatHeight;
	}

	get brakes(): string {
		return this._brakes;
	}

	// Implementation of the abstract method to calculate rental rate for MotorCycle class
	rentalRate(): number {
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
