import { useRef, useEffect, useState } from "react";
import {setNewOffset, autoGrow, setZIndex, bodyParser} from "../utils.js";
import { db } from "../appwrite/database";
import Spinner from "../icons/Spinner";
import DeleteButton from "./DeleteButton.jsx";


export const NoteCard = ({ note, setNotes }) => {
  // This prevents too many responses from happening when content is saved
  const [saving, setSaving] = useState(false);
  const keyUpTimer = useRef(null);
  // Alternative code
  // let position = JSON.parse(note.position);
  // const colors = JSON.parse(note.colors);
  // const body = bodyParser(note.body);
  const body = bodyParser(note.body);
  const [position, setPosition] = useState(JSON.parse(note.position));
  const colors = JSON.parse(note.color);
  
  let mouseStartPos = { x: 0, y: 0 };
  const cardRef = useRef(null);

  const textAreaRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const mouseDown = (e) => {
    if (e.target.className === "card-header") {
    // setZIndex(cardRef.current);
    mouseStartPos.x = e.clientX,
    mouseStartPos.y = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener("mouseup", mouseUp);

    setZIndex(cardRef.current);
    }
  }

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    // Sets boundaries of draggable area
    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    setPosition(newPosition);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);

    const newPosition = setNewOffset(cardRef.current);
    saveData('position', newPosition);
  };
  
  const saveData = async (key, value) => {
    const payload = { [key]: JSON.stringify(value) };
    try {
        await db.notes.update(note.$id, payload);
    } catch (error) {
        console.error(error);
    }
    setSaving(false);
};

const handleKeyUp = async () => {
  // Initiate "saving" state
  setSaving(true);

  // If we have a timer id, clear it so we can add another two seconds
  if (keyUpTimer.current) {
      clearTimeout(keyUpTimer.current);
  }

  // Set timer to trigger save in 2 seconds
  keyUpTimer.current = setTimeout(() => {
      saveData("body", textAreaRef.current.value);
  }, 2000);
};

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        onMouseDown={mouseDown}
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
       <DeleteButton noteId={note.$id} setNotes={setNotes} />
        {saving && (
        <div className="card-saving">
          <Spinner color={colors.colorText} />
          <span style={{ color: colors.colorText }}>Saving...</span>
        </div>
    )};

      </div>
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => {autoGrow(textAreaRef)}}
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
          onKeyUp={handleKeyUp}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard; 