import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import CarrierAccordion from './CarrierAccordion';


const CarrierListStyled = styled.ul`
    padding: 0;
`;


class CarrierAccordionList extends Component {
    render() {
        const carriers = [];

        this.props.carriers.forEach((carrier) => {
            carriers.push(
                <CarrierAccordion
                    carrier={carrier}
                    plans={this.props.plans[carrier.name]}
                    searchText={this.props.searchText}
                    key={carrier.id}
                />
            );
        });

        return (
            <CarrierListStyled>
                {carriers}
            </CarrierListStyled>
        );
    }
}

export default CarrierAccordionList;