const ParkingSystem = function(big, medium, small) {
  this.count = [small, medium, big];
};

ParkingSystem.prototype.addCar = function(carType) {
  return this.count[carType - 1]-- > 0;
}

parkingSystem = new ParkingSystem(1,2,1);
console.log(parkingSystem.addCar(1))
console.log(parkingSystem.addCar(2))
console.log(parkingSystem.addCar(2))
console.log(parkingSystem.addCar(3))
console.log(parkingSystem.addCar(3))

