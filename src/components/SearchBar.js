import React from "react";
// import { connect } from "react-redux";

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

export default SearchBar; //connect()(SearchBar);