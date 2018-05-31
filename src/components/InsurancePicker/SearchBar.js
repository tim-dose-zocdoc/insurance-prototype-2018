import React, { Component } from 'react';

class SearchBar extends Component {
    handleSearchTextChange = (e) => {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        const searchText = this.props.searchText;

        return (
            <form>
                <input
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