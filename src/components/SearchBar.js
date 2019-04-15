import React from "react";
import PropTypes from 'prop-types';

const SearchBar = ({ searchBarValue, searchByColumn }) => {
  return (
    <div>
      Search:{" "}
      <input
        type="text"
        placeholder="input value to search"
        value={searchBarValue}
        onChange={searchByColumn}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchBarValue: PropTypes.string.isRequired,
  searchByColumn: PropTypes.func.isRequired
}

export default SearchBar;