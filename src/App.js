import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'

class App extends Component {

  state = {
    location: { lat: -34.397, lng: 150.644 },
    zoom: 13
  };

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map
          mapCenter = {this.state.location}
          zoom = {this.state.zoom}
        />
      </div>
    );
  }
}

export default App;
