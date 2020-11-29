function bonAppetit(bill, k, b) {
  bill[k]=0;

  let reducer = (accumulator, currentValue)=> accumulator+currentValue;

  let annaExpectedBill = bill.reduce(reducer)/2;
  ( b == annaExpectedBill) ? console.log("Bon Appetit"): console.log(b-annaExpectedBill);
}

bonAppetit([3,10,2,9],1,7)
