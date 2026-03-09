# Roman Numeral Converter

A JavaScript-based web application that converts any decimal integer (from 1 to 3999) into its equivalent Roman numeral.

## Features
- **Instant Conversion:** Converts Arabic numerals to Roman numerals in real-time.
- **Input Validation:** Handles edge cases such as empty inputs, negative numbers, or numbers greater than 3999.
- **Recursive/Iterative Logic:** Uses an efficient mapping algorithm to match decimal values with Roman symbols (M, D, C, L, X, V, I).

## Tech Stack
- **JavaScript (ES6+)** - Conversion logic and DOM manipulation.
- **HTML5** - Application structure.
- **CSS3** - User interface and responsive styling.

## Live Demo
Check out the live application here: [Live Link](https://missdatauz.github.io/roman---numeral---converter/)

## How it Works
The app iterates through a pre-defined set of Roman numeral values in descending order, subtracting the largest possible value from the input number until it reaches zero.
