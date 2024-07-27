import React from "react";
import Plus from "../icons/Plus";
import SunIcon from '../icons/sun.svg';
import colors from "../assets/colors.json";
import { useRef } from "react";
import { db } from "../appwrite/database";
import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";

const AddButton = () => {
    const { setNotes } = useContext(NotesContext);
    const startingPos = useRef(10);

    const addNote = async () => {
        const payload = {
            position: JSON.stringify({
                x: startingPos.current,
                y: startingPos.current,
            }),
            colors: JSON.stringify(colors[0]),
        };

        startingPos.current += 10;

        const response = await db.notes.create(payload);
        setNotes((prevState) => [response, ...prevState]);
    };

    return (
        <div id="add-btn" onClick={addNote}>
            <Plus />
            <img src={SunIcon} alt="Sun" className="sun-icon" />
        </div>
    );
};

export default AddButton;