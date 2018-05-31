import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';


class CarrierListItem extends Component {
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
            </li>
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

export default CarrierList;