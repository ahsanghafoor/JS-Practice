//Assignment No 1:
//Declare An Array And Print Each And Every Element To The Console

let Array = [1, 2, 3];
console.log(Array);

//Assignment NO 2:
//Write A Function Which Takes An Array As Argument And Returns All Array Elements

function printArray(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] + "";
  }
  return output;
}

const myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(printArray(myArray));

//Assignment NO 3:
//Write a program that takes an array of integers and prints the sum of all the elements in the array.

function arrSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`The sum of array is ${sum}`);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
arrSum(array);
