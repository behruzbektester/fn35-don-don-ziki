import { aiChooser } from "./ai-chooser.js";
import { checkWinner } from "./check-winner.js";
import {
  elGameZone,
  elGameZonePicker,
  elHands,
  elRefreshGame,
  elAiHand,
  elhumanHand,
  elStatus,
  closeBtn,
  modal,
  overlay,
  showBtn,
} from "./html-selection.js";
import { initialState } from "./settings.js";
import { uiChangerByWinner } from "./ui-changer-by-winner.js";
import { uiChanger } from "./ui-changer.js";

// Elhands Listener
elHands.forEach((hand) => {
  hand.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const chosenHand = clickedElement.querySelector(".game-zone__img");
    elhumanHand.src = chosenHand.src;
    // chosenHand.alt
    const chosenHandAi = aiChooser(initialState.mode, chosenHand.alt);
    setTimeout(function () {
      elAiHand.src = `img/${chosenHandAi}.svg`;
      const currentAction = checkWinner(chosenHand.alt, chosenHandAi);
      uiChangerByWinner(currentAction);
    }, 1000);
    uiChanger("elGameZone");
  });
});

// Refresh Game
elRefreshGame.addEventListener("click", function () {
  uiChanger("elGameZonePicker");
  elAiHand.src = "img/oval.svg";
  elAiHand.classList.remove("win-shadow");
  elhumanHand.classList.remove("win-shadow");
  elStatus.style.display = "none";
});

const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
