import React, { Component } from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom';
import dummyStore from '../dummy-store'
import Header from '../Header'
import Main from '../Main'
import Folder from '../Folder/Folder'
import Note from '../Note/Note'
import SideBar from '../SideBar'
import FilteredNote from '../FilteredNote'

class App extends Component {
  state = {

  }

  render() {
    return (
      <>
        <section>
          <Route path='/' component={Header} />
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <Route exact path='/' component={SideBar} />
            <Route exact path='/' component={Main} />
          </div>
        </section>

        <section>
          <Route path='/folder/:id' component={SideBar}/>
          <Route path='/folder/:id' component={FilteredNote}/>
        </section>

        <section>
          <Route path='/note/:id' component={Note}/>
        </section>

        {/* <section>
          <Route path='/id' />
        </section> */}
      </>
    )
  }
}

export default App;
