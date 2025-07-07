JavaScript Calculator Using Higher-Order Functions
This project demonstrates the use of JavaScript higher-order functions by implementing a simple calculator in the browser console.

📂 Files Included
index.html — The HTML file that loads the JavaScript.

app.js — Contains various calculator functions using different JavaScript function types (named functions, anonymous functions, arrow functions, IIFEs).

💻 Features
Demonstrates:

Function expressions

Immediately Invoked Function Expressions (IIFE)

Arrow functions

Higher-order functions (passing functions as arguments)

Performs basic arithmetic:

Addition

Subtraction

Multiplication

Modulo

🚀 How to Run
Clone the repository.

Open index.html in your browser.

Open the browser console (Right-click → Inspect → Console).

View the output of various calculations.

🧠 Example Code
javascript
Copy
Edit
function calculator(a, b, op) {
  return op(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculator(5, 2, add)); // 7
📚 Learning Focus
This project is great for understanding:

Functional programming concepts in JavaScript

How JavaScript treats functions as first-class citizens
