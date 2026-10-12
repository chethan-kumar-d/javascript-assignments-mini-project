console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) console.log(`5 x ${i} = ${5 * i}`);
console.log("\n-- First number > 10 divisible by 6 --");
let number = 11;
while (true) {
  if (number % 6 === 0) {
    console.log(`Found: ${number}`);
    break;
  }
  number++;
}
console.log("\n-- Odd numbers from 1 to 5 (do...while / continue) --");
let counter = 0;
do {
  counter++;
  if (counter % 2 === 0) continue;
  console.log(counter);
} while (counter < 5);
