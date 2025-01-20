import { elAiHand, elhumanHand, elScore, elStatus } from "./html-selection.js";

export function uiChangerByWinner(state) {
    const elTitle = elStatus.querySelector(".status__title");

    if (state === "tie") {
        elStatus.style.display = "block";
        elTitle.textContent = "YOU TIED";
    } else if (state === "user") {
        elStatus.style.display = "block";
        elScore.innerText = +elScore.innerText + 1;
        elTitle.textContent = "YOU WIN";
        elhumanHand.classList.add("win-shadow");
    } else if (state === "ai") {
        elStatus.style.display = "block";
        if (+elScore.innerText > 0) {
            elScore.innerText = +elScore.innerText - 1;
        }
        elTitle.textContent = "YOU LOSE";
        elAiHand.classList.add("win-shadow");
    } else {
        console.log("bunday holat mavjud emas");
    }
}