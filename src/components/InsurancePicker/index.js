import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from './SearchBar';
import CarrierAccordion from './CarrierAccordion';

class InsurancePicker extends Component {
    state = {
        searchText: ''
    }
    
    handleSearchTextChange = (searchText) => {
        this.setState({
            searchText:searchText
        });
    }
    
    topCarriers = (count=10) => {
        return _(this.props.carriers).orderBy('requests', 'desc').slice(0,count).sortBy('name');
    }
    
    renderCarriers = (carriers, allPlans) => {
        const matchingCarriers = [];

        carriers.forEach( (carrier) => {
            console.log(JSON.stringify(carrier));
            const plans = allPlans[carrier.name];
            matchingCarriers.push(
                <CarrierAccordion
                    carrier={carrier}
                    plans={plans}
                    searchText={this.state.searchText}
                    key={carrier.id}
                />
            );
        });
        return matchingCarriers;
    }
    
    render() {
        const plansGrouped = _.groupBy(this.props.plans, 'carrier.name');

        return (
            <div>
                <SearchBar
                    searchText={this.state.searchText}
                    onSearchTextChange={this.handleSearchTextChange}
                />
                <h2>Popular insurances</h2>
                {this.renderCarriers(this.topCarriers(5),plansGrouped)}
                <h2>All insurances</h2>
                {this.renderCarriers(this.topCarriers(100),plansGrouped)}
            </div>
        );
    }
}

export default InsurancePicker;