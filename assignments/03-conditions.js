const input = prompt("Enter test score from 0 to 100 (example: 85):", "85");
const score = Number(input);
if (input === null) {
  console.log("Grade calculation cancelled.");
} else if (input.trim() === "" || !Number.isFinite(score) || score < 0 || score > 100) {
  console.log("Invalid score. Enter a number from 0 to 100.");
} else {
  let band;
  if (score >= 90) band = 4;
  else if (score >= 80) band = 3;
  else if (score >= 70) band = 2;
  else if (score >= 60) band = 1;
  else band = 0;
  let grade;
  switch (band) {
    case 4: grade = "A"; break;
    case 3: grade = "B"; break;
    case 2: grade = "C"; break;
    case 1: grade = "D"; break;
    default: grade = "F";
  }
  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${score >= 60 ? "Passed" : "Failed"}`);
}
