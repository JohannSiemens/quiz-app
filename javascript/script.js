const mainQuestions = document.querySelector('[data-js="main-questions"]');

const formSubmit = document.querySelector('[data-js="questions-form"]');

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  cardBuilder(mainQuestions, data);
  event.target.reset();
  event.target.question.focus();
});

function cardBuilder(element, data) {
  const buildSection = document.createElement("section");
  buildSection.classList.add("card");
  element.append(buildSection);

  const buildH2 = document.createElement("h2");
  buildH2.classList.add("card__question");
  buildH2.textContent = "Question 2";
  buildSection.append(buildH2);

  const buildImage = document.createElement("img");
  buildImage.classList.add("card__bookmark");
  buildImage.setAttribute("src", "svg/bookmark.svg");
  buildImage.setAttribute("alt", "bookmark image");
  buildSection.append(buildImage);

  const buildButton = document.createElement("button");
  buildButton.classList.add("answer__button");
  buildButton.setAttribute("type", "button");
  buildButton.textContent = "Show Answer";
  buildSection.append(buildButton);

  const buildParagraph = document.createElement("p");
  buildParagraph.classList.add("card__answer", "card__answer--hide");
  buildParagraph.textContent = "Example Answer";
  buildSection.append(buildParagraph);

  const buildDiv = document.createElement("div");
  buildDiv.classList.add("card__tags");
  buildSection.append(buildDiv);

  const buildDivButton = document.createElement("button");
  buildDivButton.classList.add("tags__tag");
  buildDivButton.setAttribute("type", "button");
  buildDivButton.textContent = "#tag1";
  buildDiv.append(buildDivButton);
}

//----------------------------------------
//Card One
/*
const cardOneAnswerButton = document.querySelector(
  '[data-js="card-answer-button1"]'
);
const cardOneAnswerToggle = document.querySelector('[data-js="card1-answer"]');

cardOneAnswerButton.addEventListener("click", () =>
  hideAnswer(cardOneAnswerButton, cardOneAnswerToggle)
);

const cardOneBookmark = document.querySelector('[data-js="bookmark-card1"]');

cardOneBookmark.addEventListener("click", () =>
  bookmarkImageToggle(cardOneBookmark)
);*/

/*
//----------------------------------------
//Card Two

const cardTwoAnswerButton = document.querySelector(
  '[data-js="card-answer-button2"]'
);
const cardTwoAnswerToggle = document.querySelector('[data-js="card2-answer"]');

cardTwoAnswerButton.addEventListener("click", () =>
  hideAnswer(cardTwoAnswerButton, cardTwoAnswerToggle)
);

const cardTwoBookmark = document.querySelector('[data-js="bookmark-card2"]');

//----------------------------------------
//Card Three

const cardThreeAnswerButton = document.querySelector(
  '[data-js="card-answer-button3"]'
);
const cardThreeAnswerToggle = document.querySelector(
  '[data-js="card3-answer"]'
);

cardThreeAnswerButton.addEventListener("click", () =>
  hideAnswer(cardThreeAnswerButton, cardThreeAnswerToggle)
);

const cardThreeBookmark = document.querySelector('[data-js="bookmark-card3"]');

//----------------------------------------
//Card Four

const cardFourAnswerButton = document.querySelector(
  '[data-js="card-answer-button4"]'
);
const cardFourAnswerToggle = document.querySelector('[data-js="card4-answer"]');

cardFourAnswerButton.addEventListener("click", () =>
  hideAnswer(cardFourAnswerButton, cardFourAnswerToggle)
);

const cardFourBookmark = document.querySelector('[data-js="bookmark-card4"]');

//----------------------------------------
//Card Five

const cardFiveAnswerButton = document.querySelector(
  '[data-js="card-answer-button5"]'
);
const cardFiveAnswerToggle = document.querySelector('[data-js="card5-answer"]');

cardFiveAnswerButton.addEventListener("click", () =>
  hideAnswer(cardFiveAnswerButton, cardFiveAnswerToggle)
);

const cardFiveBookmark = document.querySelector('[data-js="bookmark-card5"]');

//----------------------------------------
//Card Six

const cardSixAnswerButton = document.querySelector(
  '[data-js="card-answer-button6"]'
);
const cardSixAnswerToggle = document.querySelector('[data-js="card6-answer"]');

cardSixAnswerButton.addEventListener("click", () =>
  hideAnswer(cardSixAnswerButton, cardSixAnswerToggle)
);

const cardSixBookmark = document.querySelector('[data-js="bookmark-card6"]');

//----------------------------------------
//Card Seven

const cardSevenAnswerButton = document.querySelector(
  '[data-js="card-answer-button7"]'
);
const cardSevenAnswerToggle = document.querySelector(
  '[data-js="card7-answer"]'
);

cardSevenAnswerButton.addEventListener("click", () =>
  hideAnswer(cardSevenAnswerButton, cardSevenAnswerToggle)
);

const cardSevenBookmark = document.querySelector('[data-js="bookmark-card7"]');

//----------------------------------------
//Card Eight

const cardEightAnswerButton = document.querySelector(
  '[data-js="card-answer-button8"]'
);
const cardEightAnswerToggle = document.querySelector(
  '[data-js="card8-answer"]'
);

cardEightAnswerButton.addEventListener("click", () =>
  hideAnswer(cardEightAnswerButton, cardEightAnswerToggle)
);

const cardEightBookmark = document.querySelector('[data-js="bookmark-card8"]');
*/
//----------------------------------------
// Function to toggle the Answer for the User, after clicking the "Show Answer" Button
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

//Function to toggle the Bookmark Icon for every card
let bookmarked = false;

function bookmarkImageToggle(bookmark) {
  if (bookmarked) {
    console.log("remove");
    bookmark.src = "svg/bookmark.svg";
  } else {
    console.log("add");
    bookmark.src = "svg/bookmark_added.svg";
  }
  bookmarked = !bookmarked;
}
