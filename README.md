# JavaScript Assignments & Mini Project

Six practical JavaScript assignments and an interactive Product Inventory & Analytics mini project.

## Technologies

HTML and JavaScript.

## Assignments

1. Variables, data types, typeof and console output
2. Operators, user input and number conversion
3. Conditions using if/else, switch and ternary operators
4. Loops using for, while and do/while, including break and continue
5. Functions, arrow functions, default parameters and scope
6. Objects, arrays, forEach, filter and map

## Mini Project

The Product Inventory & Analytics application demonstrates:

- Adding a product through browser prompts
- Validating product names and prices
- Checking for duplicate product names
- Categorising products as Budget, Standard or Premium
- Finding affordable products
- Calculating inventory totals, discounts and tax
- Displaying results in the browser console

The inventory starts with a Laptop ($800) and Mouse ($25).

Inventory data is stored in memory and resets when the page reloads.

## Run Locally

1. Click Code → Download ZIP in this repository.
2. Extract the downloaded ZIP.
3. Open index.html in Chrome, Edge or Firefox.
4. Choose an assignment or the mini project.
5. Open Developer Tools → Console to view the results.
6. Reload the selected page to run it again.

On Windows, open Developer Tools using F12 or Ctrl + Shift + I.

No installation or API key is required to run the browser version.

Some exercises use browser prompt() dialogs. Run them in a browser; running these files directly in Node.js requires a replacement for prompt().

GitHub's repository file viewer displays the source code. It does not run the application.

## Project Structure

- assignments/ — JavaScript assignment files
- project/inventory.js — Inventory mini project
- index.html — Main entry page
- verify.js — Automated verification script
- README.md — Project documentation

## Verification

If Node.js is installed, run:

    node verify.js

The verification script checks sample outputs, grade boundaries, invalid inputs, cancellation and inventory calculations using simulated prompts.

## Author

Chethan Kumar D

[GitHub Profile](https://github.com/chethan-kumar-d)
