import Player from "./player";
import "./../CSS/PlayersContainer.css"
export default function PlayersContainer() {
  return (
    <div className="players-container">
      <Player name="Player 1"  symbol="X"/>
      <Player name="Player 2" symbol="O"/>
    </div>
  );
}
