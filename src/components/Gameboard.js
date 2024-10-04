import PlayersContainer from "./PlayersContainer";
import "./../CSS/gameBoard.css";

export default function GameBoard({ board, handleSquareSelect}) {
 
  return (
    <section className="game">
      <PlayersContainer />
      <div className="game-board">
        <ul className="row">
          {board.map((row, rowIndex) => (
            <div className="column" key={rowIndex}>
              {row.map((col, colIndex) => (
                <li key={`${rowIndex}${colIndex}`}>
                  <span>
                    <button
                      disabled={board[rowIndex][colIndex] !== null}
                      onClick={() => handleSquareSelect(rowIndex, colIndex)}
                    >
                      {col}
                    </button>
                  </span>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
