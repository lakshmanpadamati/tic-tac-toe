import { useRef, useState ,useEffect} from "react";
import "./../CSS/Player.css";
export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const focusRef=useRef(null);
  useEffect(() => {
    if (isEditing ) {
      focusRef.current.focus();
    }
  }, [isEditing]);

  function handleEdit() {
    setIsEditing((prev) => !prev);
  
  }
  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <div className="player">
      <input
        type="text"
        value={playerName}
        onChange={handleNameChange}
        disabled={!isEditing}
        ref={focusRef}
      />
      <span>{symbol}</span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}
