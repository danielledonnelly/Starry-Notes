import Trash from "../icons/Trash";
import { db } from "../appwrite/database";
import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";
import XIcon from '../icons/x.svg';
// import { NotesContext } from "../context/NotesContext";

const DeleteButton = ({ noteId }) => {
    const { setNotes } = useContext(NotesContext);
    const handleDelete = async (e) => {
        await db.notes.delete(noteId); // Ensure to wait for the delete to complete
        setNotes((prevState) =>
            prevState.filter((note) => note.$id !== noteId)
        );
    };

    return (
        <div onClick={handleDelete}>
            <img src={XIcon} alt="Delete" className="delete-icon" />
        </div>
    );
};


export default DeleteButton;
