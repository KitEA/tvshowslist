import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShows } from "../actions/actions";
import PageLoader from "./PageLoader";
import TableRenderer from "./TableRenderer";
import SearchRunner from "./SearchRunner";

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShows());
  }

  render() {
    return (
      <div>
        <SearchRunner />
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
