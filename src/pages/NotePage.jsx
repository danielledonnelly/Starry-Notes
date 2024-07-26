import { useState, useEffect } from 'react'
// import {fakeData  as notes} from '../assets/fakeData.js'
import { db } from '../appwrite/database';
import { databases } from "../appwrite/config";
import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";

const NotePage = () => {
  const { notes, setNotes } = useContext(NotesContext);

useEffect(() => {
  init();
}, []);

  const init= async () => {
    const response = await db.notes.list()
    setNotes(response.documents);

    console.log(response);
  }}

  const NotesPage = () => {
    const { notes } = useContext(NotesContext);
    return (
        <div>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))}
            <Controls />
        </div>
    );
};


export default NotePage