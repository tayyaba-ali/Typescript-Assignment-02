abstract class Vehicle {
	constructor(private _make: string, private _model: string, private _year: number, private _rented: boolean) {}

	//=== Getters==

	get make(): string {
		return this._make;
	}
	get model(): string {
		return this.model;
	}
	get year(): number {
		return this._year;
	}
	get rented(): boolean {
		return this.rented;
	}

	//== setter  for the rented instance
	set rented(rented: boolean) {
		this.rented = rented;
	}

	//==abstract class
	abstract rentalRate():number;

    //== rent method

    rent() {
        if (!this.rented) {
            this.
        }

    }
}

