const mainElement = document.querySelector('[data-js="main"]');
const cardOneAnswerButton = document.querySelector(
  '[data-js="card-answer-button1"]'
);
const cardOneAnswerToggle = document.querySelector('[data-js="card1-answer"]');

cardOneAnswerButton.addEventListener("click", () =>
  hideAnswer(cardOneAnswerButton, cardOneAnswerToggle)
);

const cardTwoAnswerButton = document.querySelector(
  '[data-js="card-answer-button2"]'
);
const cardTwoAnswerToggle = document.querySelector('[data-js="card2-answer"]');

cardTwoAnswerButton.addEventListener("click", () =>
  hideAnswer(cardTwoAnswerButton, cardTwoAnswerToggle)
);

const cardThreeAnswerButton = document.querySelector(
  '[data-js="card-answer-button3"]'
);
const cardThreeAnswerToggle = document.querySelector(
  '[data-js="card3-answer"]'
);

cardThreeAnswerButton.addEventListener("click", () =>
  hideAnswer(cardThreeAnswerButton, cardThreeAnswerToggle)
);

const cardFourAnswerButton = document.querySelector(
  '[data-js="card-answer-button4"]'
);
const cardFourAnswerToggle = document.querySelector('[data-js="card4-answer"]');

cardFourAnswerButton.addEventListener("click", () =>
  hideAnswer(cardFourAnswerButton, cardFourAnswerToggle)
);

const cardFiveAnswerButton = document.querySelector(
  '[data-js="card-answer-button5"]'
);
const cardFiveAnswerToggle = document.querySelector('[data-js="card5-answer"]');

cardFiveAnswerButton.addEventListener("click", () =>
  hideAnswer(cardFiveAnswerButton, cardFiveAnswerToggle)
);

const cardSixAnswerButton = document.querySelector(
  '[data-js="card-answer-button6"]'
);
const cardSixAnswerToggle = document.querySelector('[data-js="card6-answer"]');

cardSixAnswerButton.addEventListener("click", () =>
  hideAnswer(cardSixAnswerButton, cardSixAnswerToggle)
);

const cardSevenAnswerButton = document.querySelector(
  '[data-js="card-answer-button7"]'
);
const cardSevenAnswerToggle = document.querySelector(
  '[data-js="card7-answer"]'
);

cardSevenAnswerButton.addEventListener("click", () =>
  hideAnswer(cardSevenAnswerButton, cardSevenAnswerToggle)
);

const cardEightAnswerButton = document.querySelector(
  '[data-js="card-answer-button8"]'
);
const cardEightAnswerToggle = document.querySelector(
  '[data-js="card8-answer"]'
);

cardEightAnswerButton.addEventListener("click", () =>
  hideAnswer(cardEightAnswerButton, cardEightAnswerToggle)
);

const cardAnswerButtonText = "Show Answer";

function hideAnswer(button, answer) {
  answer.classList.toggle("card__answer--hide");
  if (button.textContent.includes(cardAnswerButtonText)) {
    button.textContent = "Hide Answer";
  } else {
    button.textContent = cardAnswerButtonText;
  }
  console.log("Hide toggle switched");
}
