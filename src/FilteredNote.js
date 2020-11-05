import React from 'react'
import dummyStore from './dummy-store'
import { Link } from 'react-router-dom'

class FilteredNote extends React.Component {


  render() {
    console.log(this.props)

    const id=this.props.match.params.id
    const notes=dummyStore.notes.filter(note => {
      console.log(note.id, id)
      return note.folderId === id
    })
    console.log(notes)
    return(
      <>
        <h1>FilteredNote</h1>
        <ul>
          {
            notes.map(note => (
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>{note.name}</Link>
            </li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default FilteredNote