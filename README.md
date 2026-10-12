# JavaScript Assignments & Mini Project

Six practical JavaScript assignments and the **Interactive Product Inventory & Analytics Dashboard**, prepared for Chethan Kumar D.

## Run in a browser

Download this repository using **Code → Download ZIP**, extract it, and open `index.html` in Chrome, Edge, or Firefox. Choose an exercise and open **Developer Tools → Console** (Windows: F12 or Ctrl+Shift+J). Reload its page to repeat. No installation, API key, or internet connection is required after download. GitHub's file viewer displays source; it does not execute HTML or JavaScript.

Assignments 2 and 3 and the mini project use browser `prompt()`, so running them directly in Node.js will not work without a prompt substitute.

## Files and concepts

| File | Concepts |
| --- | --- |
| `assignments/01-variables.js` | var, let, const, data types, typeof, console |
| `assignments/02-operators.js` | prompt, Number conversion, arithmetic, +=, formatted output |
| `assignments/03-conditions.js` | if/else, switch, ternary |
| `assignments/04-loops.js` | for, while, do/while, break, continue |
| `assignments/05-functions.js` | standard/arrow functions, defaults, function/block scope |
| `assignments/06-arrays.js` | objects, arrays, forEach, filter, map |
| `project/inventory.js` | integrated inventory application and analytics |

Each JavaScript file has a matching HTML launcher.

## Sample inputs and output

- Assignment 1: Alice, age 25, employed true, skills HTML/CSS/JavaScript.
- Assignment 2: enter `100` and `15` → tip $15 and total $115.
- Assignment 3: enter `85` → grade B, Passed. Grades: A ≥90, B ≥80, C ≥70, D ≥60, F <60; pass threshold 60.
- Assignment 4: table of 5 up to 5, first number above 10 divisible by 6 is 12; additional odd-number output demonstrates continue.
- Assignment 5: areas 20 and 30. Deliberate out-of-scope accesses are caught and printed; they do not crash the script. Browser wording for ReferenceError may vary.
- Assignment 6: Laptop $800, Mouse $25, Keyboard $45; items below $50 are Mouse and Keyboard. Console array display varies by browser.
- Project: enter `Monitor` and `150` → Laptop Premium, Mouse Budget, Monitor Standard; total $975; affordable items Mouse and Monitor. A further example applies 10% discount followed by 5% tax → $921.38.

## Project behavior

Preloaded products are Laptop ($800) and Mouse ($25). One valid product is added per run. Blank names, duplicate names (case insensitive), blank prices, nonnumeric/negative/infinite prices are rejected. Invalid entry repeats the prompts; Cancel stops entry and still reports the existing inventory. Zero price is accepted. Inventory lives in memory and resets on reload.

Category thresholds: Budget < $50; Standard $50 to below $500; Premium ≥ $500. Affordable means strictly below $200. Thresholds are local to `runInventory()` and can be adjusted there. Standard functions calculate totals and categories; an arrow function accepts custom tax and discount percentages with defaults and local variables. The project demonstrates searching with break, validation with continue, and forEach/filter/map reporting.

## Verification

Run `node verify.cjs` to verify sample outputs, boundary grades, invalid inputs, cancellation, and project totals. Tests provide simulated prompts; normal usage remains in the browser.

## Submission

Submit the repository URL requested by your instructor by **16 October 2026**. A private repository requires reviewer access; a link alone does not grant access. Follow your instructor's visibility requirements before submitting.
