import React from 'react'
import dummyStore from './dummy-store'
import { Link } from 'react-router-dom'

class Main extends React.Component {


  render() {
    console.log(dummyStore)
    return(
      <>
        <h1>Main</h1>
        <ul>
          {
            dummyStore.notes.map(note => (
            <li>
              <Link to={note.id}>{note.name}</Link>
            </li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default Main