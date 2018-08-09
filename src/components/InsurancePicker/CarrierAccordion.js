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

const CarrierListItemStyled = styled.li`
list-style: none;
min-height: 32px;
padding: 8px 0;
`

class CarrierAccordion extends Component {
    state = {
        open: false
    }

    handleClick = (carrier) => {
        this.setState({
            open: this.state.open ? false : true
        });
    }

    renderPlanList = () => {
        return(
            <PlanList
                plans={this.props.plans}
                searchText={this.props.searchText}
            />
        );
    }

    maybeRenderPlanList = () => {
        if (this.state.open === true) {
            return (
                (this.renderPlanList())
            );
        }
        if ( this.hasMatchingPlans === true ) {
            return (
                (this.renderPlanList())
            );
        }
    }

    renderArrow = () => {
        if (this.state.open === true) {
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
        
        if ( this.props.carrierMatches === true || this.props.hasMatchingPlans === true ) {
            return (
                <div>
                    <CarrierListItemStyled key={carrier.name} onClick={() => this.handleClick(carrier)}>
                        <Highlighter
                            highlightClassName="string-match"
                            searchWords={[this.props.searchText]}
                            autoEscape={true}
                            textToHighlight={carrier.name}
                            />
                        {this.renderArrow()}
                    </CarrierListItemStyled>
                    {this.maybeRenderPlanList()}
                </div>
            );
        } else {
            return null;
        }


    }
}

export default CarrierAccordion;