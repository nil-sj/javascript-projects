function findMinValue(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

function sortNumArray(numArr) {
  let sortedNumArr = [];
  while (numArr.length > 0) {
    sortedNumArr.push(findMinValue(numArr));
    numArr.splice(numArr.indexOf(findMinValue(numArr)), 1);
  }
  return sortedNumArr;
}

/* BONUS MISSION: Refactor your sorting function to use recursion below: */

function recursiveSortNumArray(numArr) {
  if (numArr.length < 2) {
    return numArr;
  } else {
    let minValue = findMinValue(numArr);
    numArr.splice(numArr.indexOf(minValue), 1)
    return [minValue].concat(recursiveSortNumArray(numArr));
  }
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(`The nums1 array at the start is [${nums1}]`);
console.log(sortNumArray(nums1));
console.log(`After applying the sortNumArray function, nums1 array looks like: [${nums1}]`);

console.log(`The nums3 array at the start is [${nums3}]`);
console.log(recursiveSortNumArray(nums3));
console.log(`After applying the recursiveSortNumArray function, nums3 array looks like: [${nums3}]`);