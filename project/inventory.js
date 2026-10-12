function runInventory() {
  const inventory = [{ name: "Laptop", price: 800 }, { name: "Mouse", price: 25 }];
  const thresholds = { budget: 50, premium: 500, affordable: 200 };
  console.log("--- Initializing Inventory System ---");
  while (true) {
    const rawName = prompt("Enter new product name (example: Monitor):", "Monitor");
    if (rawName === null) { console.log("Product entry cancelled."); break; }
    const name = rawName.trim();
    if (!name) { console.log("Product name cannot be empty."); continue; }
    let duplicate = false;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name.toLowerCase() === name.toLowerCase()) { duplicate = true; break; }
    }
    if (duplicate) { console.log("Product already exists. Use a different name."); continue; }
    const rawPrice = prompt("Enter price (example: 150):", "150");
    if (rawPrice === null) { console.log("Product entry cancelled."); break; }
    const price = Number(rawPrice);
    if (rawPrice.trim() === "" || !Number.isFinite(price) || price < 0) {
      console.log("Invalid price. Enter a non-negative number.");
      continue;
    }
    inventory.push({ name, price });
    break;
  }
  function categoryFor(price) {
    let band;
    if (price < thresholds.budget) band = "low";
    else if (price >= thresholds.premium) band = "high";
    else band = "middle";
    switch (band) {
      case "low": return "Budget";
      case "high": return "Premium";
      default: return "Standard";
    }
  }
  function totalValue(items) {
    let total = 0;
    for (const item of items) {
      if (!item || !Number.isFinite(item.price) || item.price < 0) continue;
      total += item.price;
    }
    return total;
  }
  const adjustedValue = (amount, taxPercent = 0, discountPercent = 0) => {
    if (!Number.isFinite(amount) || amount < 0 || !Number.isFinite(taxPercent) || taxPercent < 0 ||
        !Number.isFinite(discountPercent) || discountPercent < 0 || discountPercent > 100) {
      throw new RangeError("Invalid amount, tax, or discount.");
    }
    const discounted = amount * (1 - discountPercent / 100);
    return discounted * (1 + taxPercent / 100);
  };
  const money = amount => Number(amount.toFixed(2));
  console.log("\n--- Processing Inventory Roster (forEach) ---");
  inventory.forEach(item => console.log(`* Item: ${item.name} ($${money(item.price)}) -> Category: ${categoryFor(item.price)}`));
  const total = totalValue(inventory);
  console.log("\n--- Financial Analytics ---");
  console.log(`Total Inventory Value: $${money(total)}`);
  console.log(`Filtered Affordable Items (Under $${thresholds.affordable}): ${JSON.stringify(inventory.filter(item => item.price < thresholds.affordable).map(item => item.name))}`);
  console.log(`Formatted Report List: ${JSON.stringify(inventory.map(item => `${item.name.toUpperCase()}: $${money(item.price)}`))}`);
  console.log(`Inventory Item Count: ${inventory.length}`);
  console.log(`Value with 10% discount, then 5% tax: $${money(adjustedValue(total, 5, 10))}`);
}
runInventory();
