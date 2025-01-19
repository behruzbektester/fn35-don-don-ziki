import { aiChooser } from "./ai-chooser.js";
import {
  elGameZone,
  elGameZonePicker,
  elHands,
  elRefreshGame,
  elAiHand,
  elhumanHand,
} from "./html-selection.js";
import { initialState } from "./settings.js";
import { uiChanger } from "./ui-changer.js";

elHands.forEach((hand) => {
  hand.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const chosenHand = clickedElement.querySelector(".game-zone__img");
    elhumanHand.src = chosenHand.src;
    // chosenHand.alt
    const chosenHandAi = aiChooser(initialState.mode);

    setTimeout(function () {
      elAiHand.src = `img/${chosenHandAi}.svg`;
    }, 1000);
    uiChanger("elGameZone");
  });
});

// Refresh Game

elRefreshGame.addEventListener("click", function () {
  uiChanger("elGameZonePicker");
  elAiHand.src = "img/oval.svg";
});
