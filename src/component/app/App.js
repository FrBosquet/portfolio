import React, { Component } from 'react'
import './App.css'
import Header from '../header/header.js'
import Presentation from '../presentation/presentation.js'
import Education from '../education/education.js'
import Projects from '../projects/projects.js'
import Contact from '../contact/contact.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Presentation />
        <Education />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App
