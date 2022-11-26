// array to generate numbers for the gradient
const hexNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];

let hex1 = "";
let hex2 = "";

// event listener for button clicks
document.querySelector("#generate").addEventListener("click", () => {
  generateRandomHex();
});

// function for the gradient generator
// for loop to generate 6 random numbers
// Math.random to get the random number in the console
// Math.floor to round up the number to nearest whole
function generateRandomHex() {
  console.log(Math.floor(Math.random() * hexNumbers.length));
}
