const word ="WORKSHOP";
const wordContainer = document.getElementById("work");
function showWordLetterByLetter() {
  let index = 0;
  const intervalId = setInterval(function() {
    wordContainer.textContent += word[index];
    index++;
    if (index === word.length) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 200); 
}
showWordLetterByLetter();