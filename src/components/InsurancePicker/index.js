import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from './SearchBar'
import CarrierAccordionList from './CarrierAccordionList'


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
    
    render() {
        const plansGrouped = _.groupBy(this.props.plans, 'carrier.name');

        return (
            <div>
                <SearchBar
                    searchText={this.state.searchText}
                    onSearchTextChange={this.handleSearchTextChange}
                />
                <h2>Popular insurances</h2>
                <CarrierAccordionList 
                    carriers={this.topCarriers(5)}
                    plans={plansGrouped}
                    searchText={this.state.searchText}
                />                
                <h2>All insurances</h2>
                <CarrierAccordionList
                    carriers={this.topCarriers(100)}
                    plans={plansGrouped}
                    searchText={this.state.searchText}
                />
            </div>
        );
    }
}

export default InsurancePicker;