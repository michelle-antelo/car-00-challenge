class Vehicle {
    constructor (a, b, c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
console.log(myFirstVehicle);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());

class Car extends Vehicle {
    constructor (a,b,c){
    super(a,b,c);
    this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk());     // "Beep."
console.log(myFirstCar.numWheels);  // 4

class Motorcycle extends Vehicle {
    constructor (a,b,c){
    super(a,b,c);
    this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!"
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

console.log(myFirstMotorcycle.toString());
// "The vehicle is a Honda Nighthawk from 2000."

console.log(myFirstMotorcycle.honk());     // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2

class Garage {
    constructor (capacity){
    this.vehicles = [];
    this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
          return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
          return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}

let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
// "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
// "Sorry, we're full."