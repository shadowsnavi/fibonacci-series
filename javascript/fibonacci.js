function fibonacci(num) {
  // type your code here
  if (num < 2) {
    return num
  }
  let last = [0, 1]

  for (let i = 0; i < num - 1; i++) {
    const sum = last[0] + last[1]
    last = [last[1], sum]
  }
  return last[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
