const hands = ["rock", "paper", "scissors"];

export function getHand() {
  return parseInt(Math.random() * 10) % 3;
}

export const player1 = {
  name: "Toby",
  playerHand: getHand,
};
export const player2 = {
  name: "Maguire",
  playerHand: getHand,
};

export function playRound(player1, player2) {
  let hand1 = hands[player1.playerHand()];
  let hand2 = hands[player2.playerHand()];

  if (
    (hand1 === "rock" && hand2 === "scissors") ||
    (hand1 === "paper" && hand2 === "rock") ||
    (hand1 === "scissors" && hand2 === "paper")
  ) {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player1.name +
        " wins!"
    );
    return player1;
  } else if (
    (hand2 === "rock" && hand1 === "scissors") ||
    (hand2 === "paper" && hand1 === "rock") ||
    (hand2 === "scissors" && hand1 === "paper")
  ) {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player2.name +
        " wins!"
    );
    return player2;
  } else {
    console.log(
      player1.name +
        " and " +
        player2.name +
        " tied by both playing " +
        hand1 +
        "."
    );
    return null;
  }
}
let player1WinCount = 0;
let player2WinCount = 0;

export function playGame(player1, player2, playUntil) {
  let winner = playRound(player1, player2);
  if (winner === player1) {
    player1WinCount++;
    console.log(player1.name + "'s Score:" + player1WinCount);
    console.log(player2.name + "'s Score:" + player2WinCount);
  } else if (winner === player2) {
    player2WinCount++;
    console.log(player1.name + "'s Score:" + player1WinCount);
    console.log(player2.name + "'s Score:" + player2WinCount);
  }
  if (player1WinCount === playUntil || player2WinCount === playUntil) {
    return [winner];
  }
  return playGame(player1, player2, playUntil);
}
// playGame(player1, player2, 5);

// Functions below specifically placed for Jest testing (toHaveBeenCalled)

export const funcA = (calledFunc) => {
  calledFunc();
};

export const funcB = (calledFunc) => {
  return calledFunc();
};