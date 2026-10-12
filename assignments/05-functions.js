function rectangleArea(length = 5, width = 4) {
  const area = length * width;
  return area;
}
const arrowArea = (length = 5, width = 4) => length * width;
console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${arrowArea(10, 3)}`);
{
  let blockVar = "Only available inside this block";
}
try {
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}
try {
  console.log(area);
} catch (error) {
  console.log(`Function Scope Test: ${error.name}: ${error.message}`);
}
