// Define the word you want to show letter by letter
const word = "ABOUT ME:";

// Get the element where you want to display the word
const wordContainer = document.getElementById("me");

// Function to show the word letter by letter
function showWordLetterByLetter() {
  let index = 0;
  const intervalId = setInterval(function() {
    // Append one letter at a time to the word container
    wordContainer.textContent += word[index];
    index++;

    // Check if all letters have been shown
    if (index === word.length) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 300); // Change this value to adjust the speed of displaying letters
}

// Call the function to start showing the word letter by letter
showWordLetterByLetter();
