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
];

let hex1 = "000000";
let hex2 = "000000";

// event listener for button clicks
document.querySelector("#generate").addEventListener("click", () => {
  generateRandomHex();
});

// event listener to copy the gradient generated
document.querySelector("#copy").addEventListener("copy", () => {
  copyHex();
});

// function for the gradient generator
// for loop to generate 6 random numbers
// Math.random to get the random number in the console
// Math.floor to round up the number to nearest whole
// to access hexNumbers add in the hexNumbers array

// function generateRandomHex() {
//   console.log(hexNumbers[Math.floor(Math.random() * hexNumbers.length)]);
// }

function generateRandomHex() {
  // to delete past hex codes
  (hex1 = ""), (hex2 = "");
  for (let i = 0; i < 6; i++) {
    hex1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
    hex2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
  }
  // access linar gradient from index.html <h1>
  document.querySelector("#hex1").innerHTML = hex1;
  document.querySelector("#hex2").innerHTML = hex2;
  // access the colour from css
  document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`;
}

function copyHex() {
  const gradient = `background: linear-gradient(45deg, #${hex1}, #${hex2})`;
  navigator.clipboard.writeText(gradient);
}
