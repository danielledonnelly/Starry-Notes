import Trash from "../icons/Trash";
import { db } from "../appwrite/database";
import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";
import XIcon from '../icons/x.svg';
// import { NotesContext } from "../context/NotesContext";

const DeleteButton = ({ noteId }) => {
//  Commented this out because for some reason it triggers constantly otherwise
//  console.log("Delete clicked")
    const { setNotes } = useContext(NotesContext);
    const handleDelete = async (e) => {
        db.notes.delete(noteId);
        setNotes((prevState) =>
            prevState.filter((note) => note.$id !== noteId)
        );
    };
    return (
        <div onClick={handleDelete}>
            <Trash />
        </div>
    );
};

export default DeleteButton;
