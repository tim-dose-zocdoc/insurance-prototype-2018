import React, { Component } from 'react';
import carriers from './data/Carriers';
import './App.css';
import InsurancePicker from './components/InsurancePicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InsurancePicker carriers={carriers} />
      </div>
    );
  }
}


export default App;
