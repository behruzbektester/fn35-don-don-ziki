export function checkWinner(user, ai) {
    const hands = {
        rock: "rock",
        paper: "paper",
        scissors: "scissors",
    };
    if (user === ai) {
        return "tie";
    } else {
        if (user === hands.rock && ai === hands.scissors) {
            return "user";
        } else if (user === hands.paper && ai === hands.rock) {
            return "user";
        } else if (user === hands.scissors && ai === hands.paper) {
            return "user";
        } else {
            return "ai";
        }
    }
}