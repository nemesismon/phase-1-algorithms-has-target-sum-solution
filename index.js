function hasTargetSum(array, target) {
  
  const seenNumbers = new Set();
  for (const number of array) {
    const comp = target - number;
    if (seenNumbers.has(comp)) return true;
    seenNumbers.add(number);
  }

  return false;
  // for (i=0; i < array.length; i++) {
  //   const comp = target - array[i];
  //   for (j=i+1; j < array.length; j++) {
  //     if (array[j] === comp) return true;
  //   }
  // }
  // return false;
};

/* 
  Write the Big O time complexity of your function here

  Third: 
  Second: 0(n); 20 ms
  First: 0(n^2); 28 ms
*/

/* 
  Add your pseudocode here
  + iterate over the array
    + subtract the value of each number to create the complment value
      + store the complement to use for comparison of the remaining numbers through the iteration
        + if there is a match return true
  +if no match return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
    // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
