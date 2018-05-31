import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';

class PlanListItem extends Component {
    render() {
        return (
            <li key={this.props.plan.name}>
                <Highlighter
                    highlightClassName="string-match"
                    searchWords={[this.props.searchText]}
                    autoEscape={true}
                    textToHighlight={this.props.plan.name}
                />
            </li>
        );
    }
}

class PlanList extends Component {
    render() {
        const items = [];
        const searchText = this.props.searchText;

        this.props.plans.forEach( (plan) => {
            if ( plan.carrier.name === 'Aetna' && searchText.length > 1) {
                console.log('plan: ' + plan.name.toLowerCase());
                console.log('search: ' + searchText.toLowerCase());
            }
            if (plan.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
                items.push(
                    <PlanListItem
                        plan={plan}
                        searchText={searchText}
                    />
                );
            }
        });

        return(
            <ul>
                {items}
            </ul>
        );
    }
}


class CarrierAccordion extends Component {
    handleClick = (carrier) => {
        console.log(carrier.name);
    }
    
    render() {
        const carrier = this.props.carrier;

        return(
            <li key={carrier.name} onClick={() => this.handleClick(carrier)}>
                <Highlighter
                    highlightClassName="string-match"
                    searchWords={[this.props.searchText]}
                    autoEscape={true}
                    textToHighlight={carrier.name}
                />
                <PlanList
                    plans={this.props.plans}
                    searchText={this.props.searchText}
                />
            </li>
        );
        
    }
}


class CarrierAccordionList extends Component {
    render() {
        const searchText = this.props.searchText;
    
        const items = [];
        
        this.props.carriers.forEach((carrier) => {
            const plans = this.props.plans[carrier.name];
            var hasMatchingPlans = false;
    
            plans.forEach((plan) => {
                if (plan.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
                    hasMatchingPlans = true;
                }
            });

            if (carrier.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || hasMatchingPlans ) {
                items.push(
                    <CarrierAccordion
                        carrier={carrier}
                        plans={plans}
                        searchText={this.props.searchText}
                        key={carrier.name + carrier.id}
                    />
                );
            }
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default CarrierAccordionList;