import React from 'react';
import Header from './components/Header';
import TopContainer from './components/TopContainer';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import "./App.css"

const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <Skill/>
      <Projects/>
      <Experience/>
      <Contact/>
  
    </div>
  )
}

export default App
