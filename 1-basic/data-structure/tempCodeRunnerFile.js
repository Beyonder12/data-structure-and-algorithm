

function root(a) {

  let yi = a*a*a*a;

  while(yi > 0.001) {
    xi = a*a - a*a*a*a/2*a*a
    yi = xi*xi;
  }

  return xi;

}

console.log(root(4))