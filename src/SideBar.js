import React from 'react'
import dummyStore from './dummy-store'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {


  render() {
    console.log(dummyStore)
    return(
      <>
        <h1>SideBar</h1>
        <ul>
          {
            dummyStore.folders.map(folder => (
            <li>
              <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
            </li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default SideBar