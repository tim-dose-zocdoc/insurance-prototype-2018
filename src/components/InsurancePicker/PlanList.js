import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';

const PlanListItemStyled = styled.li `
    list-style: none;
    display: flex;
    min-height: 32px;
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
`

const PlanListStyled = styled.ul `
    padding-left: 16px;
`;

class PlanListItem extends Component {
    render() {
        return (
            <PlanListItemStyled key={this.props.plan.name}>
                <Highlighter
                    highlightClassName="string-match"
                    searchWords={[this.props.searchText]}
                    autoEscape={true}
                    textToHighlight={this.props.plan.name}
                />
            </PlanListItemStyled>
        );
    }
}

class PlanList extends Component {
    render() {
        const items = [];
        const searchText = this.props.searchText;

        this.props.plans.forEach( (plan) => {
            if (plan.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
                items.push(
                    <PlanListItem
                        plan={plan}
                        searchText={searchText}
                        key={plan.id}
                    />
                );
            }
        });

        return(
            <PlanListStyled>
                {items}
            </PlanListStyled>
        );
    }
}

export default PlanList;