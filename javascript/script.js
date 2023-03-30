const mainElement = document.querySelector('[data-js="main"]');
const cardOneAnswerButton = document.querySelector(
  '[data-js="card-answer-button1"]'
);
const cardOneAnswerToggle = document.querySelector('[data-js="card1-answer"]');
const cardBookmarkToggle = document.querySelector(
  '[data-js="card-bookmark-card1"]'
);
const cardBookmarkHide = document.querySelector(
  '[data-js="card-bookmark-hide"]'
);
const cardAnswerButtonText = "Show Answer";

cardOneAnswerButton.addEventListener("click", () => {
  cardOneAnswerToggle.classList.toggle("card__answer--hide");
  if (cardOneAnswerButton.textContent.includes(cardAnswerButtonText)) {
    cardOneAnswerButton.textContent = "Hide Answer";
  } else {
    cardOneAnswerButton.textContent = cardAnswerButtonText;
  }
  console.log("Hide toggle switched");
});

//Die Funktionalität ist grundsätzlich gegeben. Ich konnte auf index.html damit die
//2. Card an und ausblenden. Es gibt wohl noch einen Trick, wie man von
//einer HTML Datei auf die andere Referenziert, wenn dort eine Aktion statt
//findet. Evtl. durch Speichern in ein Array?
/*
cardBookmarkToggle.addEventListener("click", () => {
  if (cardBookmarkHide.classList.contains("tags__tag--hidden")) {
    cardBookmarkHide.classList.remove("tags__tag--hidden");
  } else {
    cardBookmarkHide.classList.add("tags__tag--hidden");
  }
});*/
