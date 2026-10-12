function readNonNegative(message) {
  while (true) {
    const input = prompt(message);
    if (input === null) return null;
    const value = Number(input);
    if (input.trim() !== "" && Number.isFinite(value) && value >= 0) return value;
    console.log("Please enter a valid non-negative number.");
  }
}
const subtotal = readNonNegative("Enter bill amount (example: 100):");
if (subtotal === null) {
  console.log("Bill calculation cancelled.");
} else {
  const tipPercentage = readNonNegative("Enter tip percentage (example: 15):");
  if (tipPercentage === null) {
    console.log("Bill calculation cancelled.");
  } else {
    const tip = subtotal * tipPercentage / 100;
    let total = subtotal;
    total += tip;
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${Number(tip.toFixed(2))}`);
    console.log(`Total Amount to Pay: $${Number(total.toFixed(2))}`);
  }
}
