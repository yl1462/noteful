import React from 'react'
import dummyStore from './dummy-store'
import { Link } from 'react-router-dom'

class Header extends React.Component {


  render() {
    return(
      <h1>
        <Link to='/'>Noteful</Link>
      </h1>
      
    )
  }
}

export default Header