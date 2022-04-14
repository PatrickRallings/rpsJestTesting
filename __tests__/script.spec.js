import { getHand } from "../script.js";
import { player1 } from "../script.js";
import { player2 } from "../script.js";
import { playRound } from "../script.js";
import { playGame } from "../script.js";
import { jest } from "@jest/globals";
import { funcA } from "../script.js";
import { funcB } from "../script.js";
 
describe("Checking if functions are truthy", () => {
  test("Making sure getHand returns truthy", () => {
    expect(getHand).toBeTruthy();
  });

  test("Making sure playRound returns truthy", () => {
    expect(playRound).toBeTruthy();
  });

  test("Making sure playRound returns truthy", () => {
    expect(playGame).toBeTruthy();
  });
});

describe("Checking functions output", () => {
  test("Checking if getHand returns a number", () => {
    expect(typeof getHand()).toBe("number");
  });

  test("Checking if playGame returns player1 as winner if player1 is the only player argument", () => {
    expect(playGame(player1, player1, 5)[0]).toBe(player1);
  });
});

describe("Checking various other matchers", () => {
  test("Making sure getHands only returns one hand", () => {
    expect(getHand().toString()).toHaveLength(1);
  });

  test("Making sure calledFunc was called inside function A (while utilizing mock)", () => {
    let calledFunc = jest.fn(() => true);
    funcA(calledFunc)
    expect(calledFunc).toHaveBeenCalled();
  });

  test("Making sure calledFunc was returned inside function B (while utilizing mock)", () => {
    let calledFunc = jest.fn(() => true);
    funcB(calledFunc)
    expect(calledFunc).toHaveReturned();
  });
});
