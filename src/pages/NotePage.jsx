import React from 'react'
import {fakeData  as notes} from '../assets/fakeData.js'
import { NoteCard } from '../components/NoteCard.jsx'

const NotePage = () => {
  return <div>
    {notes.map(note => (
      <NoteCard key={note.$id} note={note}/>
    ))}
  </div>
};
export default NotePage