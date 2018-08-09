import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

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
        const matchingPlans = [];
        const searchTextLowerCase = this.state.searchText.toLowerCase();

        carriers.forEach( (carrier) => {
            const plans = allPlans[carrier.name];
            var carrierMatches = carrier.name.toLowerCase().indexOf(searchTextLowerCase);
            var hasMatchingPlans = false;

            plans.forEach( (plan) => {
                if (plan.name.toLowerCase().indexOf(searchTextLowerCase) > -1 ) {
                    matchingPlans.push(plan);
                    hasMatchingPlans = true;
                }
            });

            matchingCarriers.push(
                <CarrierAccordion
                    carrier={carrier}
                    carrierMatches={carrierMatches}
                    plans={plans}
                    hasMatchingPlans={hasMatchingPlans}
                    matchingPlans={matchingPlans}
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
                <CarrierListStyled>
                    {this.renderCarriers(this.topCarriers(5),plansGrouped)}
                </CarrierListStyled>
                <h2>All insurances</h2>
                <CarrierListStyled>
                    {this.renderCarriers(this.topCarriers(100),plansGrouped)}
                </CarrierListStyled>
            </div>
        );
    }
}

const CarrierListStyled = styled.ul`
    padding: 0;
`;


export default InsurancePicker;