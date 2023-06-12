
//part one
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return "The vehicle is a Honda Monster Truck from 1999.";

    }
}


//part 2
class Car extends Vehicle {
    constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
    }
}



//part 3
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}





//part 4
class Garage {
    constructor(vehicles, capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "only vehicles are allowed in here!";
        }

        if (this.vehicles.length >= this.capacity) {
            return "sorry we're full";
        }

        this.vehicles.push(newVehicle);
        return "Vehicle added!";
  
    }

    
}


































