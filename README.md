# JavaScript Function Examples

## Introduction
This project contains several simple JavaScript functions demonstrating various concepts, such as palindrome detection, word reversal, calculating discounts and delivery fees for a food service, and sorting numbers with zero separators. Each function serves a specific purpose and can be run directly in Node.js.

## Installation
To run this project, you need Node.js installed on your system. You can download it [here](https://nodejs.org). Once installed, open the terminal and run the following commands:

```bash
node 1.js
node 2.js
node 3.js
node 4.js
```

## Features

### 1. Palindrome Detection (`1.js`)
This function checks if a given word is a palindrome, meaning it reads the same forwards and backwards.

Example:
```javascript
checkPalindrome('Malam');  // Output: Malam is a palindrome
```

### 2. Reverse Words (`2.js`)
This function reverses the order of words in a sentence.

Example:
```javascript
reverseWords('Saya belajar JavaScript');  // Output: JavaScript belajar Saya
```

### 3. FazzFood Discount and Delivery Calculation (`3.js`)
This function calculates the subtotal after considering discounts, delivery fees based on distance, and tax (if applicable).

Example:
```javascript
FazzFood(7500000, 'FAZZFOOD50', 5, true);
```

### 4. Divide and Sort Numbers (`4.js`)
This function splits a number by zeros (`0`), sorts each part, then joins them back together.

Example:
```javascript
console.log(divideAndSort(5956560159466056));  // Output: 555566569999
```

## Author
- **NandaHasnan** - Developer
