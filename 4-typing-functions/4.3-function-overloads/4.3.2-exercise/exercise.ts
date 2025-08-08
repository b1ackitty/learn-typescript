// Exercise 1: Create function overloads for a function named `getLength`
// that can take either a string or an array and return their length.
function getLength(value: string): number
function getLength(value: any[]): number

function getLength(value: any): number {
  return value.length
}
// Test your implementation:
console.log(getLength("TypeScript")); // 10
console.log(getLength([1, 2, 3, 4, 5])); // 5
