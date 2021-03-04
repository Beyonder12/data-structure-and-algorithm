/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

 var ParkingSystem = function(big, medium, small) {
     this.count = [big, medium, small];
 };


 /**
  * @param {number} carType
  * @param {boolean}
  */

  ParkingSystem.prototype.addCar = function(carType) {
      return this.count[carType - 1] -- > 0;
  };

  /**
   * Your ParkingSystem object will be instantiated and called as such:
   * var obj = new ParkingSystem(big, medium, small)
   * var param_1 = obj.addCar(carType)
   */

   var obj = new ParkingSystem(3, 2, 1)
   var param_1 = obj.addCar(1)