import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(e) {
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
                        key={carrier}
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
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(searchText) {
        this.setState({
            searchText:searchText
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    searchText={this.state.searchText}
                    onSearchTextChange={this.handleSearchTextChange}
                />
                <CarrierList
                    carriers={this.props.carriers}
                    searchText={this.state.searchText}
                />
            </div>
        );
    }
}

export default InsurancePicker;