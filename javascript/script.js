const mainElement = document.querySelector('[data-js="main"]');

//----------------------------------------
//Card One

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
);

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
