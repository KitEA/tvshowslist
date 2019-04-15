import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import {
  fetchShows,
  searchByColumn,
  changeSearchValue
} from "../actions/actions";
import PageLoader from "./PageLoader";
import TableRenderer from "./TableRenderer";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchByColumn = this.searchByColumn.bind(this);
  }

  searchByColumn(event) {
    const { dispatch } = this.props;
    const currentSearchBarValue = event.target.value;
    dispatch(changeSearchValue(currentSearchBarValue));
    const { shows } = this.props;
    dispatch(searchByColumn(shows, currentSearchBarValue));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShows());
  }

  render() {
    return (
      <div>
        <SearchBar
          searchBarValue={this.props.search}
          searchByColumn={this.searchByColumn}
        />
        <TableRenderer />
        <PageLoader />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  currentPage: state.currentPage,
  sort: state.sort,
  search: state.search,
  searchResults: state.searchResults
});

export default connect(mapStateToProps)(App);
