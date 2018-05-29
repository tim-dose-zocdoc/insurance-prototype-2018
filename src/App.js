import React, { Component } from 'react';
import logo from './logo.svg';
import carriers from './data/carriers.json';
import plans from './data/insurance_data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="carriers">
          <PlanList plans={plans} />
          <CarrierList carriers={carriers} />
        </div>
      </div>
    );
  }
}

function PlanList(props) {
  const plans = props.plans;
  const listItems = plans.map((plan) =>
    <li key={plan.PlanType_ID}>{plan['Carrier']} - {plan['Plan']}</li> 
  );
  return (
    <ul>{listItems}</ul>
  );
}

function CarrierList(props) {
  const carriers = props.carriers;
  const listItems = carriers.map((carrier) =>
    <li key={carrier.InsuranceID}>{carrier['Carrier Name']}</li> 
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default App;
