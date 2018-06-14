import React, { Component } from 'react';
import styled from "styled-components";

class SearchBar extends Component {
    handleSearchTextChange = (e) => {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        const searchText = this.props.searchText;

        return (
            <form>
                <SearchStyled
                    className="carrier-search-field"
                    type="text"
                    placeholder="Search..."
                    value={searchText} 
                    onChange={this.handleSearchTextChange}
                />
            </form>
        );
    }
}

export default SearchBar;

const SearchStyled = styled.input `
    font-size: 16px;
    padding: 16px;
    width: 100%;
`;
