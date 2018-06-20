// URLify A STRING
const URLify = string => string.replace(/ /g, '%20');
console.log(URLify('this is a test string'));
//O(n)
// The longer the string inputted the more operations are needed

// FILTERING AN ARRAY
const filterArray = arr => {
  let filtered = [];
  arr.forEach(element => {
    if (element >= 5) {
      filtered.push(element);
    }
  });
  return filtered;
}
console.log(filterArray([1,4,6,10,9]));
// O(n)
// the longer the input the more operations are needed

// MAX SUM IN THE ARRAY
const maxSum = arr => {
  let sum = 0;
  let currentMax = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > currentMax) {
      currentMax = sum;
    }
  }
  return currentMax;
}
console.log(maxSum([-5,-1,23,10,-15,1,4,7,-7]))
// O(n)
// the longer the inputted array is the longer itll take the loop over it

// MERGE ARRAYS
const mergeArr = (arr1, arr2) => {
  let newArray = [...arr1, ...arr2];
  return newArray.sort((a, b) => a - b);
};
console.log(mergeArr([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));
// O(n)
// sort will loop over our array and order it, so the longer the array the longer itll take

// REMOVE CHARACTERS
const removeChar = (string, chars) =>  {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (!chars.includes(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}
console.log(removeChar('this is my string', 'aeiou'))
// O(n^2)
// Loops over the string and for each character in the string it will loop over our filter string and check to see if the character at string[i] exists inside it. If it doesnt, it will
// push that character into our new string and once the function completes it will return the new array

// PRODUCTS
const products = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let product= 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        product *= arr[j];
      }
    }
    newArr.push(product);
  }
  return newArr;
}
console.log(products([1, 3, 9, 4]))
// O(n^2)
// Loops over array and for each element in the array itll loop over the array again and multiply each element in the array together so long as the element in the second loop doesnt equal the
// current element in the first loop.

// 2D ARRAY
// input: [
//   [1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]
// ]
const twoDArray = arr => {
  let result = arr.map(a => a.slice());
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < arr[i].length; k++) {
          result[i][k] = 0;
        }

        for (let g = 0; g < arr.length; g++) {
          result[g][j] = 0;
        }
      }
    }
  }
  return result;
};
console.log(twoDArray([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
]))

// STRING ROTATION
const rotated = (str1, str2) => {
  
}