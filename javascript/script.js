const mainElement = document.querySelector('[data-js="main"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card-answer-button"]'
);
const cardAnswerToggle = document.querySelector('[data-js="card-answer"]');

cardAnswerButton.addEventListener("click", () => {
  cardAnswerToggle.classList.toggle("card__answer--hide");
  /*cardAnswerToggle.classList.toggle(
    replaceButtonText("cardAnswerToggle", "Hide Answer")
  );*/
  console.log("Hide toggle switched");
});
