import React from 'react'
import dummyStore from '../dummy-store'

class Note extends React.Component {


  render() {
    const id=this.props.match.params.id
    const note=dummyStore.notes.find(note => note.id === id)
    return(
      <>
        <h1>Note</h1>
        <p>{note.name}</p>
        <p>{note.content}</p>
        <p>{note.modified}</p>
      </>
    )
  }
}

export default Note