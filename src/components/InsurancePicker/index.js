import React, { Component } from 'react';
import _ from 'lodash';


class SearchBar extends Component {
    handleSearchTextChange = (e) => {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        const searchText = this.props.searchText;

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText} 
                    onChange={this.handleSearchTextChange}
                />
            </form>
        );
    }
}


class CarrierListItem extends Component {
    render() {
        const carrier=this.props.carrier;
        return(
            <li>{carrier.name}</li>
        );
        
    }
}


class CarrierList extends Component {
    render() {
        const searchText = this.props.searchText;
    
        const items = [];

        this.props.carriers.forEach((carrier) => {
            if (carrier.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
                items.push(
                    <CarrierListItem 
                        carrier={carrier}
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