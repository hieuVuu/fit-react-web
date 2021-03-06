import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
