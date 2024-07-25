import { useState, useEffect } from 'react'
// import {fakeData  as notes} from '../assets/fakeData.js'
import { db } from '../appwrite/database';
import { databases } from "../appwrite/config";
import NoteCard from "../components/NoteCard";

const NotePage = () => {
  const [notes, setNotes] = useState([])

useEffect(() => {
  init();
}, []);

  const init= async () => {
    const response = await db.notes.list()
    setNotes(response.documents);

    console.log(response);
  }

  return <div>
    {notes.map(note => (
      <NoteCard key={note.$id} note={note} setNotes={setNotes}/>
    ))}
  </div>
};
export default NotePage