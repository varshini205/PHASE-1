const word = "FRONTEND DEVELOPER";
const wordContainer = document.getElementById("title");
function showWordLetterByLetter() {
  let index = 0;
  const intervalId = setInterval(function() {
    wordContainer.textContent += word[index];
    index++;
    if (index === word.length) {
      clearInterval(intervalId); 
    }
  }, 200);
}
showWordLetterByLetter();