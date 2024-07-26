import { useState, useEffect } from 'react'
// import {fakeData  as notes} from '../assets/fakeData.js'
import { db } from '../appwrite/database';
import { databases } from "../appwrite/config";
import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";
import Controls from '../components/Controls';

  const NotePage = () => {
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


export default NotePage;