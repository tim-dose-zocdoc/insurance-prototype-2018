import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';

import Arrow from '../icons/Arrow';
import PlanList from './PlanList';


const SizedArrow = styled(Arrow) `
    width: 10px;
    margin-left: 4px;
    position: relative;
    top: 3px;
`;

const CarrierListItemStyled = styled.li `
    list-style: none;
    min-height: 32px;
    padding: 8px 0;
`

const CarrierListStyled = styled.ul `
    padding: 0;
`;

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

    renderArrow = () => {
        if ( this.state.open === true ) {
            return (
                <SizedArrow
                    direction={Arrow.direction.up}
                />
            );
        } else {
            return (
                <SizedArrow
                    direction={Arrow.direction.down}
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
                <CarrierListItemStyled key={carrier.name} onClick={() => this.handleClick(carrier)}>
                    <Highlighter
                        highlightClassName="string-match"
                        searchWords={[this.props.searchText]}
                        autoEscape={true}
                        textToHighlight={carrier.name}
                    />
                    {this.renderArrow()}
                    {this.maybeRenderPlanList()}
                </CarrierListItemStyled>
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
            <CarrierListStyled>
                {carriers}
            </CarrierListStyled>
        );
    }
}

export default CarrierAccordionList;