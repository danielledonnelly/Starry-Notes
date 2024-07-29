import React from "react";
import RedIcon from "../icons/red.svg";
import PinkIcon from "../icons/pink.svg";
import PurpleIcon from "../icons/purple.svg";
import BlueIcon from "../icons/blue.svg";
import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";
import { db } from "../appwrite/database";

const Color = ({ color }) => {
    const { selectedNote, notes, setNotes } = useContext(NotesContext);

    const changeColor = () => {
        if (!selectedNote) {
            alert("Whoa there, space cowboy! You have to select a note before changing colors.");
            return;
        }

        console.log("Selected color:", selectedNote);

        try {
            const currentNoteIndex = notes.findIndex(
                (note) => note.$id === selectedNote.$id
            );

            const updatedNote = {
                ...notes[currentNoteIndex],
                colors: JSON.stringify(color),
            };

            const newNotes = [...notes];
            newNotes[currentNoteIndex] = updatedNote;
            setNotes(newNotes);

            db.notes.update(selectedNote.$id, {
                colors: JSON.stringify(color),
            });
        } catch (error) {
            console.error("Error updating note color:", error);
            alert("An error occurred while updating the note color.");
        }
    };

    const Icon = {
        "color-red": RedIcon,
        "color-pink": PinkIcon,
        "color-purple": PurpleIcon,
        "color-blue": BlueIcon
    }[color.id];

    return (
        <div
            onClick={changeColor}
            className={`color ${color.id} color-icon`} 
            style={{ backgroundColor: color.colorHeader }}
        >
            <img src={Icon} alt={`${color.id} color`} />
        </div>
    );
};

export default Color;
