'use strict';

// Select the elements from the DOM
const button = document.querySelector('#submit-button');
const input = document.querySelector('#user-input');
const output = document.querySelector('#output');

// Define the function to handle the click event
const handleClick = () => {
  const text = input.value.trim();

  // If the input is not empty, display the output
  if (text) {
    const reversedText = text.split('').reverse().join('');
    output.textContent = reversedText;
  } else {
    output.textContent = '';
  }
};

// Add an event listener to the button
button.addEventListener('click', handleClick);
