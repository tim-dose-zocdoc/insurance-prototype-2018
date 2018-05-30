import React, { Component } from 'react';
import carriers from './data/Carriers';
import plans from './data/Plans';
import './App.css';
import InsurancePicker from './components/InsurancePicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InsurancePicker carriers={carriers} />
        <div className="plans">
          <h2>Plans</h2>
          <PlanList plans={plans} />
        </div>
      </div>
    );
  }
}

function PlanList(props) {
  const plans = props.plans.slice(0,100);
  const listItems = plans.map((plan) =>
    <li key={'plan-' + plan.id}>{plan.carrier.name} - {plan.name}</li> 
  );
  return (
    <ul>{listItems}</ul>
  );
}



export default App;
