import "./../CSS/Logs.css"
export default function Logs({ turns }) {
  return (
    <div className="logs">
      {turns.map((turn) => (
        <p key={`${turn.square.col}${turn.square.row}`} className="log">
          {turn.player} clicked {turn.square.col} {turn.square.row}
        </p>
      ))}
    </div>
  );
}
