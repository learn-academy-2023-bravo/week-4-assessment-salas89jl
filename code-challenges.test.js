// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe(arrayShufle, () => {
const colors1 = ["purple", "blue", "green", "yellow", "pink"]

const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

  it("removes item in index 0 and shuffles the remaining content", () => {
    expect(["yellow", "blue", "pink", "green"]).not.toEqual(expect.arrayContaining(colors1)) 
    expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).not.toEqual(expect.arrayContaining(colors2)) 
  })
})
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo",
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
//   ReferenceError: arrayShuffle is not defined

// b) Create the function that makes the test pass.

// Pseudo Code
// create a funciton called arrayShuffle
// Input: an array of strings
// Output: an array of strings that contains the string values from the input arrays minus the value of the first index.
// using the code snippet from Fisher-Yates shuffle algorithm 
function arrayShufle(arr) {
  let newArray = arr.shift()
  // Start from the last element and swap one by one. We don't need to run forthe first element that's why i > 0
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i inclusive
    const j = Math.floor(Math.random() * (i + 1)) // at random index
    // Swap arr[i] with the element
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// PASS  ./code-challenges.test.js
// arrayShufle
// ✓ removes item in index 0 and shuffles the remaining content (1 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("finalCountDown", () => {
  it("takes in an object and returns the sum of the outcomes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
    expect(finalCountDown(votes1)).toEqual(11)
    expect(finalCountDown(votes2)).toEqual(-31)
  })
})

// FAIL  ./code-challenges.test.js
// finalCountDown
    // ✕ takes in an object and returns the sum of the outcomes

// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function named finalCountDown
// Input: The key-value pairs of an object
// Output: The sum total of an objects key-value pairs: upVotes - downVotes.

const finalCountDown = (obj) => {
 tally = obj.upVotes - obj.downVotes
  return tally
}

// PASS  ./code-challenges.test.js
// finalCountDown
//   ✓ takes in an object and returns the sum of the outcomes

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("twoToOne", () => {
  it("takes two arrays and returns an array with no repeating values", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(twoToOne(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// FAIL  ./code-challenges.test.js
// twoToOne
// ✕ takes two arrays and returns an array with no repeating values
// ReferenceError: twoToOne is not defined

// b) Create the function that makes the test pass.

// Psuedo Code
// Create a function called twoToOne
// Input: will take two different array
// Output: a single array containing the values of both input arrays, however, it will not have repeating values. 
// Function will have to join/concat both arrays first and will be stored in new variable
// using the built in object Set on the combined array to remove duplicate values and store only unique values. 
// the ... set operator will then convert the Set object back to an array.
// the Set BIO and spread operator will store in a new variable called result
// the funtion will then return result: the new array

const twoToOne = (arr1, arr2) => {
  const combined = arr1.concat(arr2)
  const result = [...new Set(combined)]
  return result 
}
//  PASS  ./code-challenges.test.js
// twoToOne
// ✓ takes two arrays and returns an array with no repeating values

