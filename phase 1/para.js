const paragraphs = document.querySelectorAll(".paragraph");
function slideParagraphsToLeftEdge() {
  paragraphs.forEach(paragraph => {
    paragraph.style.transform = "translateX(3%)";
  });
}
setTimeout(slideParagraphsToLeftEdge, 1000);
