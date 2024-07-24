import React from 'react'

export const NoteCard = ({note}) => {
  const body = JSON.parse(note.body)
  const position = JSON.parse(note.position)
  const colors = JSON.parse(note.colors);
  return (
    <div className="card" style={{backgroundColor: colors.colorBody}}>
      {body}
    </div>
  )
}
