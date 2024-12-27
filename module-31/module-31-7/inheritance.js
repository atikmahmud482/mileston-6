class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('Vehicle is moving');
    }
}
class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Car extends Vehicle {
    constructor(name, price, speed, fuel) {
        super(name, price);
        this.speed = speed;
        this.fuel = fuel;
    }
}