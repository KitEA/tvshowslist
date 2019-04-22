import React from "react";
import PropTypes from 'prop-types';

const SearchBar = ({ searchBarValue, searchBarValueChange, searchByColumn }) => {
  return (
    <div className="search-bar">
      Search:{" "}
      <input
        className="search-input"
        type="text"
        placeholder="input show's title to search for and press enter"
        size="35"
        value={searchBarValue}
        onChange={searchBarValueChange}
        onKeyDown={searchByColumn}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchBarValue: PropTypes.string.isRequired,
  searchByColumn: PropTypes.func.isRequired
}

export default SearchBar;