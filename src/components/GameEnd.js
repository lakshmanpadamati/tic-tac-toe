import "./../CSS/GameEnd.css"
export default function GameEnd({ winner,handleReset }) {
    return (
      <div className="gameEnd-overlay">
        <div className="gameEnd">

        {winner ? (
          <p>{winner} has won the match!</p>
        ) : (
          <p>It's a draw!</p>
        )}
      <button onClick={handleReset}>Play Again!</button>
        </div>

      </div>
    );
  }
  