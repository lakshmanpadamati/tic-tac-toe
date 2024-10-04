import { useState } from "react";
import "./App.css";
import Logs from "./components/Logs";

import GameEnd from "./components/GameEnd";
import winningCombinations from "./WinningCombinations";
import GameBoard from "./components/Gameboard";
let initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [turns, setTurns] = useState([]);
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  let hasDraw = false;
  let winner = null;
  let board = [...initialBoard.map((item) => [...item])];

  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") currentPlayer = "O";

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    board[row][col] = player;
  }
  for (const combination of winningCombinations) {
    let first = board[combination[0][0]][combination[0][1]],
      second = board[combination[1][0]][combination[1][1]],
      third = board[combination[2][0]][combination[2][1]];
    if (first && first === second && first === third) {
      
      winner = first==="X"?players.X:players.O;
    }
  }
  function handleSelect(row, col) {
    setTurns((prevTurns) => {
      return [{ square: { row, col }, player: currentPlayer }, ...prevTurns];
    });
  }
  if (turns.length === 9 && !winner) hasDraw = true;
  function handleReset() {
    setTurns([]);
  }

  return (
    <main className="App">
      <GameBoard
        board={board}
        handleSquareSelect={handleSelect}
        activePlayer={currentPlayer}
      />

      {(winner || hasDraw) && (
        <GameEnd winner={winner} handleReset={handleReset} />
      )}
      <Logs turns={turns} />
    </main>
  );
}

export default App;
