import React from "react";

const SearchBar = () => {
  return (
    <div>
      Search:{" "}
      <input
        id="search"
        value={this.state.search}
        onChange={e => this.setState({ search: e.target.value })}
      />
    </div>
  );
};

export default SearchBar;