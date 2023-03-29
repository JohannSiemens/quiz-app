const mainElement = document.querySelector('[data-js="main"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card-answer-button"]'
);
const cardAnswerToggle = document.querySelector('[data-js="card-answer"]');
const cardAnswerButtonText = "Show Answer";

cardAnswerButton.addEventListener("click", () => {
  cardAnswerToggle.classList.toggle("card__answer--hide");
  if (cardAnswerButton.textContent.includes(cardAnswerButtonText)) {
    cardAnswerButton.textContent = "Hide Answer";
  } else {
    cardAnswerButton.textContent = cardAnswerButtonText;
  }
  console.log("Hide toggle switched");
});
