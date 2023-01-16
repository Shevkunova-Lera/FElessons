//Task 1.1

class Car {
    constructor(manufacturer, model, year, avgSpeed, fuelCapacity, avgFuelConsumption, drivers) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.avgSpeed = avgSpeed;
        this.fuelCapacity = fuelCapacity;
        this.avgFuelConsumption = avgFuelConsumption;
        this.drivers = drivers;
    }

    displayInfo() {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average speed: ${this.avgSpeed}`);
        console.log(`Fuel capacity: ${this.fuelCapacity}`);
        console.log(`Average fuel consumption: ${this.avgFuelConsumption}`);
        console.log(`Drivers: ${this.drivers}`);
    }

    addDriver(name) {
        this.drivers.push(name);
    }

    checkDriver(name) {
        return this.drivers.includes(name);
    }

    calculateTimeAndFuel(distance) {
        let time = distance / this.avgSpeed;
        time += (Math.floor(time / 4) * 1);
        let fuel = distance * this.avgFuelConsumption / 100;
        console.log(`Time needed: ${time} hours`);
        console.log(`Fuel needed: ${fuel} litres`);
    }
}

let car = new Car("Tesla", "Model S", 2020, 80, 60, 8, ["John", "Mike"]);
car.displayInfo();
car.addDriver("Sophie");
console.log(car.checkDriver("Sophie"));
car.calculateTimeAndFuel(500);

//Task 2.1

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    displayTime: function() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    addSeconds: function(seconds) {
        this.seconds += seconds;
        while (this.seconds >= 60) {
        this.seconds -= 60;
        this.addMinutes(1);
        }
    while (this.seconds < 0) {
        this.seconds += 60;
        this.addMinutes(-1);
    }
    },

    addMinutes: function(minutes) {
        this.minutes += minutes;
        while (this.minutes >= 60) {
        this.minutes -= 60;
        this.addHours(1);
        }
        while (this.minutes < 0) {
        this.minutes += 60;
        this.addHours(-1);
        }
    },

    addHours: function(hours) {
        this.hours += hours;
        while (this.hours >= 24) {
        this.hours -= 24;
    }
        while (this.hours < 0) {
        this.hours += 24;
    }
    }
}
time.displayTime();
time.addSeconds(150);
time.displayTime(); 
time.addMinutes(75);
time.displayTime(); 
time.addHours(5);
time.displayTime(); 