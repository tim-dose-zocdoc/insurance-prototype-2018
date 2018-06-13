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

export default PlanList;