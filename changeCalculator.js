//  We will be given two numbers, the total of a transaction, 
//  and the amount of cash given to the cashier. Both of these 
//  numbers will be represented as whole numbers in cents. 
//  Therefore $10 will be represented as 1000.
//  
//  Our function calculateChange should return an object which 
//  describes the total amount of change for the cashier to give 
//  back. Although pennies are not used in circulation, we will 
//  still calculate the amount of pennies to give back.

const calculateChange = function(total, cash) {
  //  Array of denomination names and values
  changeTypes = [
    ['twentyDollar',2000],
    ['tenDollar', 1000],
    ['fiveDollar',500],
    ['twoDollar',200],
    ['oneDollar',100],
    ['quarter',25],
    ['dime',10],
    ['nickel',5],
    ['penny',1]
  ];
  //  Blank object to be filled
  changeObj = {};
  //  Change needed
  totalChange = cash - total;
  //  Check if any change is still needed
  while (totalChange > 0) {
    //  Run through denominations
    for (denom in changeTypes) {
      //  Check if current denomination is >= change still required
      if (totalChange >= changeTypes[denom][1]) {
        //  Set/Reset counter
        counter = 0;
        //  Subtract current denom value until it is greater than the remaining
        //  change required
        while (totalChange >= changeTypes[denom][1]) {
          counter++;
          totalChange -= changeTypes[denom][1];
        };
        //  Create new property in changeObj with {Name of denom : num times denom used}
        changeObj[changeTypes[denom][0]] = counter;
      };
    };
  };
  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//  EXPECTED OUTPUT :
//  { twoDollar: 1, dime: 1, penny: 3 }
//  { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
//  { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }