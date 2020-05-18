import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import AboutDave from './Components/AboutDave';
import Movies from './Components/Movies';
import Student from './Components/Student';
import Pet from './Components/Pets';
// import Heading from './Heading';
// import logo from './logo.svg';
import './App.css';

class App extends Component { // Student extends CodeNation
  render() { // render method is used inside of Class Based components
    return (
      <div className="App">
        <Navbar />
        {/* <Heading /> */}
        {/* <AboutMe />
        <AboutDave /> */}
        <Student name="Steve" role="Apprentice Developer" />
        {/* <Student name="Kerry" role="Apprentice Developer" />
        <Student name="Connor, the mystery man" role="Apprentice Developer" /> */}
        <Movies title="Air Force One" description="The best film" watching="true" />
        <Pet name="JD" species="cat" faveFood="Cheese" />
      </div>
    )
  }
}

export default App; // this line is crucial.
