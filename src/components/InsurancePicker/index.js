import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from './SearchBar'
import CarrierList from './CarrierList'


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
        return (
            <div>
                <SearchBar
                    searchText={this.state.searchText}
                    onSearchTextChange={this.handleSearchTextChange}
                />
                <h2>Popular carriers</h2>
                <CarrierList
                    carriers={this.topCarriers(5)}
                    searchText={this.state.searchText}
                />
                
                <h2>All carriers</h2>
                <CarrierList
                    carriers={this.props.carriers}
                    searchText={this.state.searchText}
                />
            </div>
        );
    }
}

export default InsurancePicker;