import { hands } from "./hands.js";
import { initialState } from "./settings.js";

export function aiChooser(mode, humanHand) {
    const winnerPosition = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock",
    };
    if (mode === "easy") {
        const randomIndex = Math.trunc(Math.random() * hands.length);
        return hands[randomIndex];
    } else if (mode === "hard") {
        return winnerPosition[humanHand];
    } else {
        console.error("Bunday hola mavjud emas");
    }
}