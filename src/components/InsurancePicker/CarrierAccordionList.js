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
                        key={plan.id}
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
    state = {
        open: false
    }

    handleClick = (carrier) => {
        this.setState({
            open: this.state.open? false : true
        });
    }

    maybeRenderPlanList = () => {
        if ( this.state.open === true ) {
            return(
                <PlanList
                    plans={this.props.plans}
                    searchText={this.props.searchText}
                />
            );
        }
    }

    render() {
        const carrier = this.props.carrier;
        
        var hasMatchingPlans = false;
    
        this.props.plans.forEach((plan) => {
            if (plan.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) > -1 ) {
                hasMatchingPlans = true;
            }
        });

        if (hasMatchingPlans) {
            return(
                <li key={carrier.name} onClick={() => this.handleClick(carrier)}>
                    <Highlighter
                        highlightClassName="string-match"
                        searchWords={[this.props.searchText]}
                        autoEscape={true}
                        textToHighlight={carrier.name}
                    />
                    {this.maybeRenderPlanList()}
                </li>
            );
        } else {
            return null;
        }
        
    }
}


class CarrierAccordionList extends Component {
    render() {
        const carriers = [];
        
        this.props.carriers.forEach((carrier) => {
            carriers.push(
                <CarrierAccordion
                    carrier={carrier}
                    plans={this.props.plans[carrier.name]}
                    searchText={this.props.searchText}
                    key={carrier.name + carrier.id}
                />
            );
        });

        return (
            <ul>
                {carriers}
            </ul>
        );
    }
}

export default CarrierAccordionList;